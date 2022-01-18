import React, { useEffect, useState } from "react";

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "./profile"
import Projects from "./projects"
import "normalize.css"
import Aboutme from "./aboutme"
import Loading from "./loading";


const IndexPage = () => {

  const [isLoading, setIsLoading] = useState(true);

// const handleLoading = () => {
// setIsLoading(false);
// }

// useEffect(()=>{
// window.addEventListener("load",handleLoading);
// return () => window.removeEventListener("load",handleLoading);
// },[])

useEffect(()=>{
setTimeout(()=> setIsLoading(false),6000)
},[])

return isLoading ? (
<Loading />
):(
  
  <Layout>
     <Seo title="Goodnews Sandy"/>
    <div className="slides">
      <div id="profile">
        <Profile />
      </div>

      <div id="aboutme">
        <Aboutme />
      </div>
      <div
        className="  lg:h-full lg:overflow-hidden"
        id="project"
      >
        <Projects />
      </div>
    </div>
    
    {/* <div className=" slider  flex justify-between text-[12px] w-full text-white -rotate-90  text-sm absolute left-[2em] top-2/4  font-bold translate-x-2/4 translate-y-2/4 md:text-[#73ccbf] md:w-[60%] xl:w-[30%] md:text-lg xl:md:text-sm "> */}
    <div className=" slider z-20 w-[90%] flex justify-between text-[12px] text-white  text-md fixed left-[2em] bottom-[2.5em] md:w-[45%] font-bold lg:w-[40%] xl:w-[25%] ">
      <a href="#profile"> Profile </a>

      <a href="#aboutme">About Me</a>
      <a href="#project">Experiences</a>
    </div>
  </Layout>
)
}

export default IndexPage
