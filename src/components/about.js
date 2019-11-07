import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"

const About = ({data}) => {

    return (
        <section id="about" className="sticky-top">
            <div id="written" className="med-padding bg-wh">
                <h1 className="large-text inline bold">
                    simeon
                </h1>
                <p className="large-text inline">
                    {" "}is a full stack developer* interested in the ways that internet use can change the ways that we think, percieve, behave, identify and learn.
                </p>
            </div>
            <div id="about-toggle" className="about-toggle">
                
            </div>
        </section>
    )
}

export default About

