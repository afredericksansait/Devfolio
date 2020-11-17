module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.afredericksansait.com/`,
    image: 'src/images/social.jpg',
    // Your Name
    name: 'A. Frederick Sansait',
    // Main Site Title
    title: `A. Frederick Sansait | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Full-Stack Developer based in Iloilo, Philippines`,
    // Optional: Twitter account handle
    author: `@heyaitsa_`,
    // // Optional: Github account URL
    // github: `https://github.com/ryanfitzgerald`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/afredericksansait/`,
    // Optional: Email
    email: `mailto:contact@afredericksansait.com`,
    // Content of the About Me section
    about: `Hey, it's (literally the letter) A!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Sarabia Jewelry',
        description:
          'Shopify powered ecommerce website for a heritage jewelry brand',
        link: 'https://sarabiajewelry.co',
      },
      {
        name: 'El Flaco',
        description:
          'A one-page website for a middle-eastern themed restaurant',
        link: 'https://elfla.co',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'ISC Events and Media',
        description: 'Director Of External Affairs, June 2019',
        link: 'https://www.linkedin.com/company/isc-events-philippines/',
      },
      {
        name: 'TopSpeed.com',
        description: 'Web Developer, October 2018 - January 2020',
        link: 'https://www.topspeed.com',
      },
      {
        name: 'Intelligent Touch Corporation',
        description: 'Junior Software Developer, July 2017 - September 2018',
        link: 'https://www.intelligenttouch.com/',
      },
      {
        name: 'Npax Cebu Corporation',
        description: 'Intern, June 2016 - August 2016',
        link: 'https://www.intelligenttouch.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), HTML/CSS, React, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Shopify, Github, Agile, Wordpress, Office/Google Suite, Canva',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-Z6NZZFKBH4`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`,
      },
    },
  ],
};
