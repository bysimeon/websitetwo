import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"
import Image from "../components/image"
import SEO from "../components/seo"

const SecondPage = ({}) => (
    <Layout>
        <SEO title="(project.title)" />
        <About/>
        <section id="(project.title)">
          
        </section>
    </Layout>
)

export default SecondPage
