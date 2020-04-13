/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import About from "../components/about"
import Ticker from "../components/ticker"

const Layout = ({ children }) => {

    return (
        <>
            <About />
            <main>{children}</main>
            {/* <Ticker /> */}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
