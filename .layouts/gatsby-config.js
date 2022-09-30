const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "irosyadi-wiki",
  shortName: "iwiki",
  description:
    "My Obsidian-based wiki",
  twitterName: "irosyadi",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://irosyadi-wiki.netlify.app",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        sidebarDepth: 2,
        icon: "./static/logo.png",
        sidebarComponents: ["latest", "category", "summary", "tag"],
        contentMaxWidth: 1363,
        searchBody: true,
        defaultIndexLatestPostCount: 10,
        // sidebarDefault: "auto",
        // shouldSupportTags: true,
        defaultColorMode: "night",
        nav: [
          {
            title: "Latest",
            url: "/latest/",
          },
          {
            title: "Github",
            url: "https://github.com/irosyadi/wiki-garden/",
          },
        ],
        editUrl:
          "https://github.com/irosyadi/wiki-garden/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
