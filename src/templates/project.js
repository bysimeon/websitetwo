import React from "react"
import { graphql, Link } from "gatsby"
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
                    h2: props => <p {...props} className="project__p" />,
                    h3: props => <h3 {...props} className="project__h3" />,
                    h4: props => <h4 {...props} className="project__h4" />,
                    h5: props => <h5 {...props} className="project__h5" />,
                    h6: props => <h6 {...props} className="project__h6" />,
                    a: props => <a {...props} target="_blank" rel="noopener noreferrer" className="project__a" />,
                    img: props => <img {...props} className="project__img" />,
                }}
            >

                
                
                <section id={frontmatter.title} className="project__container">
                    <Link className="project__back" to="/"> ◀ </Link>
                    <div className="project__header">
                        <h1 className="project__h1">{frontmatter.title}</h1>
                        <a target="_blank" rel="noopener noreferrer" href={frontmatter.website}>visit</a>
                        &nbsp;&nbsp;&nbsp;
                        {frontmatter.github ? (<a target="_blank" rel="noopener noreferrer" href={frontmatter.github}>github</a>) : (<div></div>)}
                    </div>
                    {/* <p> {frontmatter.role} </p> */}
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
        website
        role
        github
      }
    }
  }
`