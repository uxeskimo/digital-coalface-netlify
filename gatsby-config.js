
require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: "The Digital Coalface",
    desc: "Getting to the heart of digital"
  },
  pathPrefix: "/gatsby",
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },

    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    {
     resolve: "gatsby-remark-embed-video",
      options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
            }
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123761964-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },

  ]
};
