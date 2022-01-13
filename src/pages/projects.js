import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { BiLinkExternal } from "react-icons/bi"

function Projects() {
  return (
    <div className="h-full bg-[#0e1217] w-full">
      <h1
        className=" text-left
       text-bold my-6 ml-6 text-[#73ccbf] text-[25px]
    "
      >
        Projects
      </h1>

      <div className=" w-[80%] mx-auto   md:flex justify-center flex-wrap  scroll gap-4 ">
        <div className="project_card my-6 border-none rounded-lg overflow-hidden relative text-white md:w-[250px] md:h-[250px] md:my-0">
          <StaticImage
            src="../images/tutorhub.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full  rounded-lg"
          />
          <a
            className=" rounded-lg absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://tutorhub.vercel.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />{" "}
            <div className="absolute left-2/4 top-2/4 w-4/5 font-bold translate-x-2/4 translate-y-2/4">
              <h3 className="text-md text-[#73ccbf] ">TutorHub</h3>
              <p className="text-sm">
                {" "}
                Find online tutors. You can schedule for one-on-one or group
                learning.{" "}
              </p>
            </div>{" "}
            <p className=" absolute bottom-3 left-5 text-[0.8rem] py-4 italic">
              {" "}
              ReactJS, NodeJS, MongoDB{" "}
            </p>
          </a>
        </div>

        <div className="project_card my-6 rounded-lg overflow-hidden relative text-white md:w-[250px] md:h-[250px] md:my-0">
          <StaticImage
            src="../images/Launmax.jpg"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full "
          />
          <a
            className=" absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://launmax.netlify.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />{" "}
            <div className="absolute left-2/4 top-2/4 w-4/5 font-bold translate-x-2/4 translate-y-2/4">
              <h3 className="text-md text-[#73ccbf]">LaunMax</h3>
              <p className="text-sm">
                {" "}
                Official Website for a Laundry Business Mobile App.{" "}
              </p>
            </div>
            <p className="  absolute bottom-3 left-5 text-[0.8rem] py-4 italic">
              {" "}
              HTML, Sass, JS.{" "}
            </p>
          </a>
        </div>
        <div className="project_card my-6 rounded-lg overflow-hidden relative text-white md:w-[250px] md:h-[250px] md:my-0">
          <StaticImage
            src="../images/MicroApi.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full"
          />
          <a
            className=" absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://microapicore.herokuapp.com/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />
            <div className="absolute left-2/4 top-2/4  w-4/5 font-bold translate-x-2/4 translate-y-2/4">
              <h3 className="text-md text-[#73ccbf]">MicroApi</h3>
              <p className=" text-sm">
                APIs for developers, you can easily integrated into projects.{" "}
              </p>
            </div>
            <p className="  absolute bottom-3 left-5 text-[0.8rem] py-4 italic">
              {" "}
              Python{" "}
            </p>
          </a>
        </div>
        <div className="project_card my-6 rounded-lg overflow-hidden relative text-white md:w-[250px] md:h-[250px] md:my-0">
          <StaticImage
            src="../images/Rexhot.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full"
          />
          <a
            className="absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://terms-goodnewssandy.vercel.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />{" "}
            <div className="absolute left-2/4 top-2/4 w-4/5 font-bold translate-x-2/4 translate-y-2/4">
              <h3 className="text-md text-[#73ccbf]">RexHot</h3>
              <p className="   text-sm">Creators get rewards for creativity.</p>
            </div>{" "}
            <p className="  absolute bottom-3 left-5 text-[0.8rem] py-4 italic">
              {" "}
              ReactJS{" "}
            </p>
          </a>
        </div>
        <div className="project_card my-6 rounded-lg overflow-hidden relative text-white md:w-[250px] md:h-[250px] md:my-0">
          <StaticImage
            src="../images/ShoeApp.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full"
          />
          <a
            className=" absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://womenheels.netlify.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />{" "}
            <div className="absolute left-2/4 top-2/4 w-4/5 font-bold translate-x-2/4 translate-y-2/4">
              <h3 className="text-md text-[#73ccbf]">ShoeBooth</h3>
              <p className="text-sm">
                {" "}
                An ecommerce app for ladies footwears.{" "}
              </p>
            </div>
            <p className=" absolute bottom-3 left-5 text-[0.8rem] py-4 italic">
              {" "}
              VanillaJS, Contentful.{" "}
            </p>
          </a>
        </div>
        <div className="project_card my-6 rounded-lg overflow-hidden relative text-white md:w-[250px] md:h-[250px] md:my-0">
          <StaticImage
            src="../images/workertracker.png"
            width={200}
            height={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="tutorhub"
            class="h-full w-full"
          />
          <a
            className=" absolute top-0 left-0 bg-[#000000] h-full w-full "
            href="https://mynetworth.netlify.app/"
          >
            <BiLinkExternal className=" m-4 float-right text-2xl text-[#73ccbf]" />
            <div className="absolute left-2/4 top-2/4  w-4/5 font-bold translate-x-2/4 translate-y-2/4">
              <h3 className="text-md text-[#73ccbf] ">Networth</h3>
              <p className="text-sm"> Keep track of your asests.</p>
            </div>
            <p className="  absolute bottom-3 left-5 text-[0.8rem] py-4 italic">
              {" "}
              HTML, Sass, JS.{" "}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
