import React from 'react'
import logo from '../assets/logo.svg'

export default function Logo(props) {

    if(props.appbar) {
        return (
            <div className="self-center flex flex-row ">
                    <img className="h-6 w-6" src={logo} alt=""/>
                    <p className="inline-block text-primary ml-3 font-body font-bold text-lg">Company</p>
                </div>
        )
    } else {
        return (
            <div className="flex flex-row opacity-30">
                    <img className="h-6 w-6" src={logo} alt=""/>
                    <p className="inline-block text-primary ml-3 font-body font-bold text-lg">Company</p>
                </div>
        )
    }

    
}
