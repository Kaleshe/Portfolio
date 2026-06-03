/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Kaleshe | Helping small businesses grow with user-friendly websites",
    description:
      "Web designer creating modern, user-friendly websites that help small businesses grow online.",
    siteUrl: "https://www.kaleshe.co.uk",
    og: {
      siteName: "Kaleshe | Helping small businesses grow with user-friendly websites",
    },
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-KMFWD06BSN", "AW-16555496693"],
        pluginConfig: {
          head: false,
        },
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: { "@components": "src/components" },
        extensions: ["jsx"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap`,
          },
        ],
      },
    },
  ],
};
