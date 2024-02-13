import * as React from "react"
import Layout from "../components/layout"
import headshot from "../images/icon.png"

const AboutPage = () => {
  return (
    <Layout>
        <div class="AboutPage">
          <img src={headshot} width="100" height = "100" alt="Photo of Me" />
          <h1>Stephen Lee</h1>
          <b1>Eastlake High School - Class of 2026</b1>
        </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>Steve Lee</title>

