import React from "react"
import { Link } from "gatsby"

const ProjectPreview = ({data}) => {
    const project = data.frontmatter
    return (
        <div className="browser">
            <div className="browser-tab">
                <div className="browser-tab-button"></div>
                <div className="browser-tab-button"></div>
                <div className="browser-tab-button"></div>
            </div>
            <div className="browser-content">
                <Link to={project.path}>
                    <div className="browser-content-title">
                        {project.title}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProjectPreview