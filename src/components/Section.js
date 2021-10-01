import React from 'react'
import image2 from '../assets/Laptop.svg'
import image1 from '../assets/image1.svg'
import money from '../assets/Money.svg'

export default function Section(props) {
    if(props.orientation == 0) {

        return (<div className="relative h-screen bg-white flex flex-row">

        <div className="flex flex-col w-full gap-6 mx-20 h-auto self-center">
          <p className="self-start left-0 bottom-0 font-body font-semibold text-5xl md:text-6xl text-weta">Some Really <br /> Cool Heading</p>
          <p className="self-start left-0 bottom-0 font-body max-w-lg opacity-70 font-semibold text-xl md:text-2xl text-weta">Venenatis vestibulum aliquam id lobortis pellentesque quisque. Eget in auctor et ut eu amet. Vivamus orci purus magna consectetur nam. </p>
          <div className="mt-10" >
          <a href="#" className="px-6 py-3 w-min rounded-xl bg-weta hover:bg-gray-600 uppercase tracking-widest text-sm font-medium text-white">Explore 
          <svg className="inline-block mb-1 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>
            </a>
          </div>

        </div>

        <img className="absolute mt-auto mb-auto right-0 top-0 bottom-0 opacity-10 lg:opacity-100 "  src={money} alt="" />

      </div>)

    } else {
        
    

    return (
        <div className="relative h-screen flex flex-row-reverse  bg-weta">
        

        <img className="absolute mt-auto mb-auto left-0 opacity-10 top-0 bottom-0 lg:opacity-100 "  src={image2} alt="" />

        <div className="flex flex-col w-auto gap-6 mx-20 h-auto inset-y-0 right-0 self-center ">
          <p className="self-start right-0 bottom-0 font-body font-semibold text-5xl md:text-6xl text-white">Some Really <br /> Cool Heading</p>
          <p className="self-start right-0 bottom-0 font-body max-w-lg opacity-70 font-semibold text-xl md:text-2xl text-white">Venenatis vestibulum aliquam id lobortis pellentesque quisque. Eget in auctor et ut eu amet. Vivamus orci purus magna consectetur nam. </p>
          <div className="mt-10" >
          <a href="#" className="px-6 py-3 w-min rounded-xl bg-white hover:bg-gray-200 uppercase tracking-widest text-sm font-medium text-weta">Explore 
          <svg className="inline-block mb-1 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(52,73,94,1)"/></svg>
            </a>
          </div>

        </div>
      </div>
    )
    }
}
