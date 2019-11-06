import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"

const About = ({data}) => {

    return (
        <section id="about">
            <div id="written" className="med-padding">
                <h1 className="large-text inline bold">
                    simeon
                </h1>
                <p className="large-text inline">
                    {" "}is a full stack developer* interested in the ways that internet use can change the ways that we think, percieve, behave, identify and learn.
                </p>
            </div>
            <button id="aboutToggle">
            </button>
        </section>
    )
}

export default About