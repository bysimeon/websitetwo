import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectPreview from "../components/preview"
import SEO from "../components/seo"

const IndexPage = ({ data: {
    allMarkdownRemark: { edges },
}}) => {
    const previews = edges
        // .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <ProjectPreview key={edge.node.id} data={edge.node} />)
    
    return (
        <Layout>
            <SEO title="home" />
            <div>
                {previews}
            </div>
        </Layout>
    )}

export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___rank] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            rank
            path
            title
            tags
          }
        }
      }
    }
  }
`