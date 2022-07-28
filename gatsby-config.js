require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Kellen Busby Software',
    author: 'Kellen Busby',
    description: 'Business website for Kellen Busby Software LLC.',
    siteUrl: 'http://www.kellenbusbysoftware.com',
    keywords: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Makefolio',
        short_name: 'Makefolio',
        start_url: '/',
        background_color: '#2980b9',
        theme_color: '#2980b9',
        display: 'standalone',
        icon: 'src/images/favicon-16x16.png',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_ID,
        enableWebVitalsTracking: true,
      },
    },
  ],
}
