import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const Project = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <section id={frontmatter.title} className="">
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </section>
        </Layout>
    )}

export default Project
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        tags
      }
    }
  }
`