import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ProjectPreview = ({data}) => {
    const project = data.frontmatter
    return (
        project.tags !== "unreleased" ? (
            
            <div className="browser">
                <Link to={project.path}>
                    <div className="browser-tab">
                        <div className="browser-tab-button"></div>
                        <div className="browser-tab-button"></div>
                        <div className="browser-tab-button"></div>
                    </div>
                    <div className="browser-content">
                        <Img className="browser-content-image" fluid={project.featureImage.childImageSharp.fluid} />
                        <div className="browser-content-title">
                            {project.title}
                        </div>
                    </div>
                </Link >
            </div>
            
        ) : (
            
            <div className="browser" tabIndex="1">
                <Link to={project.path}>
                    <div className="browser-tab">
                        <div className="browser-tab-button"></div>
                        <div className="browser-tab-button"></div>
                        <div className="browser-tab-button"></div>
                    </div>
                    <div className="browser-content">
                        {/* <Img className="browser-content-image" fluid={project.featureImage.childImageSharp.fluid} /> */}
                        <div className="browser-content-title">
                            {project.title}
                        </div>
                        {/* <div className="browser-content-link">
                                unreleased
                        </div> */}
                    </div>
                </Link>
            </div>
            
        )
    )
}

export default ProjectPreview