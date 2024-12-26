module.exports = {
  manifestConfig: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sơn Tùng XYZ`,
        short_name: `Sơn Tùng`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/dp.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
