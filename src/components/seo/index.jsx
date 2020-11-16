import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import importImage from '../../images/social.jpg';

const SEO = ({ description, lang, meta, title, image, siteUrl}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const finalUrl = siteUrl || site.siteMetadata?.siteUrl;
  const siteImage = image || importImage;
  const finalImage = finalUrl + siteImage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={finalTitle}
      link={[
        {
          rel: `canonical`,
          href: finalUrl,
        }
      ].concat(link)}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: finalTitle,
        },
        {
          property: `og:image`,
          content: finalImage,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          property: `twitter:title`,
          content: finalTitle,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  link: [],
  description: ``,
  image: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.arrayOf(PropTypes.object),
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
