import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Images from "./images"

const Gallery = () => {
    
    const data = useStaticQuery(graphql`
    query {
  allFile(filter: {relativeDirectory: {eq: "color"}}, sort: {fields: modifiedTime, order: ASC}) {
    edges {
      node {
        id
        relativeDirectory
        relativePath
        childImageSharp {
          id
          fluid(maxWidth: 1000, maxHeight: 1000) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
}
`)

    return (
        <Images
            data={data}
        />
    )
}

export default Gallery
