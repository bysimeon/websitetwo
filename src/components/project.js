import React from "react"
import { Link, graphql } from "gatsby"

const Project = ({data}) => {
    const project = data
    return (
        <div className="browser">
            <div className="browser-tab">
                <div className="browser-tab-button"></div>
                <div className="browser-tab-button"></div>
                <div className="browser-tab-button"></div>
            </div>
            <div className="browser-content">
                <div className="browser-content-title">
                    {project.title}
                </div>
            </div>
        </div>
    )
}

export default Project