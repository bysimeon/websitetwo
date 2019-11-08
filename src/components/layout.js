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

const Layout = ({ children }) => {

    return (
        <>
            <About />
            <main>{children}</main>
            <div className="banner">
                <div className="ticker">
                    <span>
                        <div className="ticker__item">for hire!</div>
                        <div className="ticker__item">
                            full-time @ new york or remote!
                        </div>
                        <div className="ticker__item">full stack!</div>
                        <div className="ticker__item">
                            creative technologist!
                        </div>
                        <div className="ticker__item">
                            tell your employer!
                        </div>
                        <div className="ticker__item">freelance too!</div>
                        <div className="ticker__item">
                            e-commerce, portfolio, etc!
                        </div>
                        <div className="ticker__item">
                            limited quantity!
                        </div>
                    </span>
                    <span>
                        <div className="ticker__item">for hire!</div>
                        <div className="ticker__item">
                            full-time @ new york or remote!
                        </div>
                        <div className="ticker__item">full stack!</div>
                        <div className="ticker__item">
                            creative technologist!
                        </div>
                        <div className="ticker__item">
                            tell your employer!
                        </div>
                        <div className="ticker__item">freelance too!</div>
                        <div className="ticker__item">
                            e-commerce, portfolio, etc!
                        </div>
                        <div className="ticker__item">
                            limited quantity!
                        </div>
                    </span>
                </div>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
