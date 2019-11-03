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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ],
}
