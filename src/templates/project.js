import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const Project = ({ data }) => {
    const { mdx } = data
    const { frontmatter, body } = mdx
    
    return (
        <Layout>
            <SEO title={`work, ${frontmatter.title}`} />
            <MDXProvider
                components={{
                    h1: props => <h1 {...props} className="project__h1" />,
                    h2: props => <h2 {...props} className="project__h2" />,
                    h3: props => <h3 {...props} className="project__h3" />,
                    h4: props => <h4 {...props} className="project__h4" />,
                    h5: props => <h5 {...props} className="project__h5" />,
                    h6: props => <h6 {...props} className="project__h6" />,
                    p: props => <p {...props} className="project__p" />,
                    a: props => <a {...props} className="project__a" />,
                    img: props => <img {...props} className="project__img" />,
                }}
            >
                <section id={frontmatter.title} className="project__container">
                    <MDXRenderer>{body}</MDXRenderer>
                </section>
            </MDXProvider>
        </Layout>
    )}

export default Project
export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        tags
      }
    }
  }
`