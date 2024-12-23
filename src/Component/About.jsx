// import React from 'react'

// eslint-disable-next-line react/prop-types
const About = ({name,details,img}) => {
  return (
    <div className=" text-white w-1/2 flex justify-center rounded-lg my-1  md:w-1/3 hover:scale-105 duration-150">
          <div className="bg-white w-full m-5">
          <img
            src={img}
            alt={name}
            className="w-full h-[300px] md:h-[400px]"
          />
          <h1 className="text-2xl text-cyan-500 bg-slate-500 text-center font-extrabold">{name}</h1>
          </div>
    </div>
  )
}

export default About
