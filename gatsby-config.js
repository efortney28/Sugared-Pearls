//https://graph.facebook.com/v9.0/1594822344136908/ratings

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

module.exports = {
  siteMetadata: {
    title: `Sugared Pearls Bake Shoppe`,
    description: `Your one-stop-shop for all things sweet and delicious, delivered!`,
    author: `@efortney`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sugared-pearls-bake-shoppe`,
        short_name: `Sugared Pearls`,
        start_url: `/`,
        background_color: `#FEFEFE`,
        theme_color: `#FF7C7C`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `30w2q46i4rgz`,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-antd`,
  ],
}
