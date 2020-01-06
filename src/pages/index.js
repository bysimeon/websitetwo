import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectPreview from "../components/preview"
import SEO from "../components/seo"
import Stream from "../components/stream"

const IndexPage = ({ data: {
    allMdx: { edges },
}}) => {
    const previews = edges
        .filter(edge => !!edge.node.frontmatter) // you can filter your posts based on some criteria
        .map(edge => <ProjectPreview key={edge.node.id} data={edge.node} />)
    
    return (
        <Layout>
            <SEO title="home" />
            <Stream/>
            <section id="workPreviews">
                <div className="browser-grid">
                    {previews}
                </div>
            </section>
        </Layout>
    )}

export default IndexPage
export const pageQuery = graphql`
  query {
    allMdx(sort: { order: ASC, fields: [frontmatter___rank] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            rank
            path
            title
            tags
            featureImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`