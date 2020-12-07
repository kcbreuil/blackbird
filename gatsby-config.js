module.exports = {
  siteMetadata: {
    title: `Blackbird Ordinary`,
    description: `Brickell's favorite bar`,
    author: `@kayseabee`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Special Elite", "Raleway Dots"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
