import React from 'react'
import Button from './Button'
import LogoBar from './LogoBar'

export default function AppBar() {
    return (
        <div className="z-20 backdrop-filter backdrop-blur-xl bg-opacity-40 shadow-sm fixed flex px-20 flex-row w-screen h-20 bg-white self-center justify-between">
            <LogoBar appbar={true} />
            <div className="self-center">
                <Button text="Login"/>
            </div>

        </div>
    )
}
