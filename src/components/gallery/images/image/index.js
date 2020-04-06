import React, { Component } from "react"
import "./style.scss"
import Img from "gatsby-image"


class Image extends Component {

    render() {

        return (
            <div className="image">
                <Img fluid={this.props.url}
                    // onClick={this.props.preview}
                    alt="..."
                    index={this.props.index} />
            </div>
        )
    }
}

export default Image
