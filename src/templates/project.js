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
                    {/* <Link className="project__back" to="/">
                        <svg class="">
                            <path class="shape-outline outer-color" d="M8.0008001,17.2999992c-0.4000001,0.3999996-0.4000001,1,0,1.3999996l15.7991991,15.7992001								c0.3999996,0.4000015,1,0.4000015,1.3999996,0l2.6992016-2.6991997c0.3999996-0.3999996,0.3999996-1,0-1.3999996								L16.2992001,18.7000008c-0.4000006-0.3999996-0.4000006-1,0-1.3999996L27.8992004,5.6999998								c0.3999996-0.4000001,0.3999996-1,0-1.4000001l-2.6992016-2.6992002c-0.3999996-0.4-1-0.4-1.3999996,0L8.0008001,17.2999992z"/>
                            <path class="shape-shape inner-color" d="M9.6999998,17.6000004c-0.1999998,0.2000008-0.1999998,0.5,0,0.7000008l14.500001,14.5000019								c0.2000008,0.2000008,0.5,0.2000008,0.7000008,0l1.3999996-1.3999996c0.2000008-0.2000008,0.2000008-0.5,0-0.7000008								L13.8999996,18.3999996c-0.1999998-0.2000008-0.1999998-0.5,0-0.7000008L26.2999992,5.3000002								c0.2000008-0.1999998,0.2000008-0.5,0-0.6999998l-1.3999996-1.4000001c-0.2000008-0.2-0.5-0.2-0.7000008,0L9.6999998,17.6000004z"/>
                        </svg>
                    </Link> */}
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