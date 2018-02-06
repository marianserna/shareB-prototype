module.exports = {
  siteMetadata: {
    siteUrl: `https://www.sharebibles.com`,
    title: `SHARE BIBLES`
  },
  plugins: [
    `gatsby-plugin-accessibilityjs`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-stylus`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`oswald:200`, `fjalla one`, `roboto slab:300`]
      }
    }
  ]
};
