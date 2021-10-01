import React from 'react'
import LogoBar from './LogoBar'
import fbg from '../assets/footer-bg.svg'

export default function Footer() {
    return (
        <div className="relative bottom-0 px-20 pt-20 pb-10 w-full  overflow-hidden bg-weta bg-opacity-20">

            <div className="flex flex-col self-start">
                <LogoBar appbar={false} />
                <p className="font-medium mt-3 text-left font-body text-sm text-gray-500 opacity-30 max-w-sm" >Venenatis vestibulum aliquam id <br />lobortis pellentesque quisque.</p>
            </div>

            <div className="flex mx-auto self-center justify-self-center bg-weta w-12 h-1 mt-10 mb-0">
            </div>

            <img className="absolute right-0 bottom-0" src={fbg} alt=""/>
            
        </div>
    )
}
