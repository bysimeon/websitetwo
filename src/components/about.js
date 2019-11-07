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
                
                <div className="about-window">
                    <div className="about-window-title">
                        elsewhere
                    </div>
                    <div className="about-window-content">
                        <a href="">soundcloud</a>
                        <a href="">are.na</a>
                        <a href="">pedalroom</a>
                        <a href="">last.fm</a>
                        <a href="">github</a>
                    </div>
                </div>

                <div className="about-window">
                    <div className="about-window-title">
                        contact
                    </div>
                    <div className="about-window-content">
                        <a href="">mail@bysimeon.com</a>
                    </div>
                </div>

                <div className="about-window">
                    <div className="about-window-title">
                        now listening to
                    </div>
                    <div className="about-window-content">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

