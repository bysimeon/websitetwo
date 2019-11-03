import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ProjectPreview = ({data}) => {
    const project = data.frontmatter
    return (
        <Link to={project.path}>
            <div className="browser">
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
            </div>
        </Link >
    )
}

export default ProjectPreview