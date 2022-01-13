import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineMedium } from "react-icons/ai"
import { MdEmail } from "react-icons/md"

function Sidebar() {
  return (
    <div className="  w-full  relative top-0 p-6  text-white h-[100vh] bg-[#73ccbf] shadow-lg w-6/6 rounded-bl-3xl">
      <div className="  absolute w-3/6  flex flex-row m-auto justify-between  md:w-1/6 ">
        <a
          className=" border border-white p-[0.5em] rounded-full"
          href="sandygoodnews@gmail.com"
        >
          <MdEmail />
        </a>
        <a
          className=" border border-white p-[0.5em] rounded-full "
          href="https://github.com/sandygudie"
        >
          {" "}
          <FaGithub />
        </a>
        <a
          className=" border border-white p-[0.5em] rounded-full "
          href="https://www.linkedin.com/in/goodnews-sandy-613936179/"
        >
          {" "}
          <FaLinkedinIn />
        </a>
        <a
          className=" border border-white p-[0.5em] rounded-full"
          href="https://sandygoody.medium.com/"
        >
          {" "}
          <AiOutlineMedium />
        </a>
      </div>
      <a
        className="rounded-md absolute top-[4%] right-[3%]  p-2 font-bold border border-white bg-white w-24 text-black hover:bg-transparent text-white"
        href="https://drive.google.com/file/d/16iHk-1jsugthIesU1aQs-_YXhZIVoMlX/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
      >
        Resume
      </a>

      <div className=" w-full absolute left-2/4 top-2/4  font-bold translate-x-2/4 translate-y-2/4  items-end text-center page--details xl:flex flex-row-reverse justify-flex-start gap-[97px] xl:w-[80%] ">
        <StaticImage
          src="../images/profilephotowhite.png"
          width={400}
          height={400}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="profileimage"
          className=" rounded-lg w-[150px] h-[150px]    md:w-[300px] md:h-[300px]  "
        />
        <div className="xl:text-left ">
          <p className=" mt-6 text-l text-bold md:mt-12 xl:text-l ">
            Hi!, my name Is
          </p>
          <h2 className="font-bold text-xl md:text-4xl  ">Sandy Goodnews.</h2>
          <h1 className="m-0 text-3xl pb-6 font-bold text-red-500 md:text-7xl ">
            I Create Inspiration.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
