import React from 'react'
import LogoBar from './components/LogoBar'
import loginMark from './assets/login-wm.svg'
import { useHistory } from 'react-router-dom';

export default function Login() {

    const history = useHistory();
    const handleLogin = () => history.push('/');

    return (
        <div className="h-screen w-screen grid grid-rows-2 md:grid-cols-2 bg-white">

            <div className="md:h-screen h-auto md:col-span-1 flex content-center place-content-center"  >
                <LogoBar appbar="0"/>
            </div>

            <div className="relative md:h-screen h-auto md:col-span-1 bg-weta bg-opacity-30 flex flex-col justify-center content-center place-content-center"  >
                
                <div className="z-10 h-96 flex flex-col w-72 lg:mx-40 my-10 self-center">
                    <p className="self-start left-0 bottom-0 font-body font-semibold text-5xl md:text-6xl text-weta">Login</p>
                    <input type="text" name="username" id="username" className="block ring-0 w-full mt-10 px-5 py-2 rounded-lg font-body" placeholder="Username"/>
                    <input type="password" name="password" id="password" className="block ring-0 w-full mt-6 px-5 py-2 rounded-lg font-body" placeholder="Password"/>
                    <div className="flex flex-row justify-between" >
                        <a onClick={handleLogin} className="cursor-pointer flex-grow mr-5 text-center mt-5 px-6 py-3 w-auto rounded-xl bg-weta hover:bg-gray-600 uppercase tracking-widest text-sm font-medium text-white">Login 
                            <svg className="inline-block mb-1 ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>
                        </a>
                        <a href="#" className="cursor-pointer mt-5 px-6 py-3 w-auto rounded-xl bg-gray-400 hover:bg-gray-600 uppercase tracking-widest text-sm font-medium text-weta">Sign up 
                        </a>
                    </div>

                </div>

                <img className="absolute mt-auto mb-auto right-0 bottom-0 opacity-10 lg:opacity-100 "  src={loginMark} alt="" />
            </div>

        </div>
    )
}
