import React from 'react'
import SideBySideComponent from '../smallercomp/SideBySideComponent'
import Cards from '../smallercomp/Cards'
import Carousel from '../smallercomp/Carousel'

const About = () => {
  return (
    <>
    <div className='p-10 font-serif text-5xl'>
      <h1>About Team</h1>
      <hr className="border-t-2 border-gray-300 my-4" />
    </div>
    <div className='p-12'>
     <SideBySideComponent /> 
    </div>
    <div className="flex flex-wrap justify-center gap-36 p-4 mt-10">
      <Cards/>
      <Cards/>
    </div>
    <div className="flex flex-wrap justify-center gap-36 p-4 mt-10">
      <Cards/>
      <Cards/>
    </div>
    <div>
      <Carousel />
    </div>
    </>
  )
}

export default About