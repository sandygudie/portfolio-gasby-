import React from "react"

function Aboutme() {
  return (
    <div className=" w-[85%]   text-left items-center justify-around    md:absolute md:left-2/4 md:top-2/4  md:translate-x-2/4 md:translate-y-2/4 xl-[65%] ">
      <h1 className=" text-bold mt-6 text-[#73ccbf] text-[25px] md:text-3xl">
        About Me
      </h1>
      <div className="text-white text-md leading-8 text-justify md:text-lg md:tracking-wider  lg:leading-10 xl:leading-[2em] xl:tracking-normal xl:text-xl">
        <p className="pt-2">
          HELLO!
          <span role="img" aria-label="wave">
            👋
          </span>
          , My name is{" "}
          <span className="text-[#73ccbf] text-bold">Goodnews Sandy.</span>{" "}
          <br /> I am an experienced{" "}
          <span className="text-[#73ccbf] text-bold">Frontend developer </span>,{" "}
          <span className="text-[#73ccbf] text-bold">Tech Instructor </span>and{" "}
          <span className="text-[#73ccbf] text-bold">Writer. </span>I enjoy
          building web-based applications that leaves a lasting impression on
          users. I am big on performance, accessibilty and simplicity.{" "}
        </p>
        <p className="pt-2 ">
          {" "}
          I leverage on various tools to make impact including: HTML, CSS/Sass,
          TailwindCSS, Javascript, ReactJs, Nodejs ,Gatsby, NextJs, Firebase.{" "}
        </p>

        <p className="pt-2">
          I love contributing to open source and sharing technical topics on my{" "}
          <span className="text-[#73ccbf] text-bold">Blog.</span> And, I love
          the thrills of{" "}
          <span className="text-[#73ccbf] text-bold">Startups.</span>{" "}
        </p>
      </div>
    </div>
  )
}

export default Aboutme
