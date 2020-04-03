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
                    {" "} sasterisk fourthreeeightsixseventwo s* theblindlookout &!
                </p>
            </div>
            <div id="about-toggle" className="about-toggle">
                <a id="email" target="_blank" rel="noopener noreferrer" href="mailto:mail@bysimeon.com">mail@bysimeon.com</a>
                <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/bysimeon">soundcloud/&!</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.are.na/s/all?sort=UPDATED_AT">are.na/s*</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.pedalroom.com/bike/-38950">pedal/438672</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.last.fm/user/theblindlookout"> last.fm/thblndlkt</a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/bysimeon">github/bysimeon</a>
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/lostasterisks">insta/lostasterisks</a>
                
                {/* <div className="about-window">
                    <div className="about-window-title">
                        elsewhere
                    </div>
                    <div className="about-window-content">
                        
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
                </div> */}
            </div>
        </section>
    )
}

export default About

