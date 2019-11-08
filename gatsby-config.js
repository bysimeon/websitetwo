module.exports = {
    siteMetadata: {
        title: "simeon's",
        description: "simeon's home one the internet. here you can find his work, projects, photography and more",
        author: "bysimeon",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                start_url: "/",
                icon: "src/images/favicon.png", // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "markdown",
                path: `${__dirname}/src/markdown`,
            },
        },
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1500,
                            linkImagesToOriginal: false
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ],
}

