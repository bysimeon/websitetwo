const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const projectTemplate = path.resolve("src/templates/project.js")

    const result = await graphql(`
      {
        allMdx(sort: {order: DESC, fields: [frontmatter___rank]}, limit: 1000) {
          edges {
            node {
              frontmatter {
                path
                rank
              }
            }
          }
        }
      }
  `)

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild("Error while running GraphQL query.")
        return
    }

    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: projectTemplate,
            context: {}, // additional data can be passed via context
        })
    })
}