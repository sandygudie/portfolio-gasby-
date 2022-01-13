import React from "react"

function Aboutme() {
  return (
    <div className=" w-5/6   text-left lg:flex items-center justify-around   lg:absolute lg:left-2/4 lg:top-2/4  lg:translate-x-2/4 lg:translate-y-2/4">
      <h1 className=" text-bold my-6 text-[#73ccbf] text-[25px] lg:text-3xl">
        About Me
      </h1>
      <div className="text-white text-md leading-8 text-justify lg:w-3/6 lg:text-lg lg:leading-10">
        <p className="py-2">
          Hi My name is{" "}
          <span className="text-[#73ccbf] text-bold">Goodnews.</span> <br /> I
          am an experienced{" "}
          <span className="text-[#73ccbf] text-bold">Frontend developer </span>,{" "}
          <span className="text-[#73ccbf] text-bold">Tech Instructor </span>and{" "}
          <span className="text-[#73ccbf] text-bold">Writer. </span>I enjoy
          building applications that leaves a lasting impression on users. I am
          huge on performance, accessibilty and simplicity.{" "}
        </p>
        <p className="py-2 ">
          {" "}
          I leverage on various tools to make impact including:Javascript,
          ReactJs, Nodejs ,Gatsby, NextJs, Firebase.{" "}
        </p>

        <p className="py-2">
          I love contributing to open source and sharing technical topics on my{" "}
          <span className="text-[#73ccbf] text-bold">Blog.</span> And, I love the thrills of{" "}
          <span className="text-[#73ccbf] text-bold">Startups.</span>{" "}
        </p>         
         <p> Feel free to contact me or leave a message on <a className="text-[#73ccbf] text-sm italic underline " >goodnewssandy@gmail</a> .</p>
    
      </div>
    </div>
  )
}

export default Aboutme
