import * as React from "react"

import Layout from "../components/layout"

import Profile from "./profile"
import Projects from "./projects"
import "normalize.css"
import Aboutme from "./aboutme"

const IndexPage = () => (
  <Layout>
    <div class="slides">
      <div id="profile">
        <Profile />
      </div>

      <div id="aboutme">
        <Aboutme />
      </div>
      <div
        className="overflow-scroll h-[90%] lg:h-full lg:overflow-hidden"
        id="project"
      >
        <Projects />
      </div>
    </div>
    <div className=" flex text-black-100 justify-center w-full slider absolute bottom-[1.5em]">
      <a href="#profile"> Profile </a>

      <a href="#aboutme">About Me</a>
      <a href="#project">Experiences</a>
    </div>
  </Layout>
)

export default IndexPage
