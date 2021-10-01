import React from 'react'

const Card = ({ packageD }) => {

    const getIcon = (id) => {
        if(id=== 0) {
            return(<svg className="inline mr-2 fill-current text-weta self-center group-hover:text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>)
        }
        if(id=== 1) {
            return(<svg className="inline-block mr-2 fill-current text-weta self-center group-hover:text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z"/></svg>)
        }
        if(id=== 2) {
            return(<svg className="inline mr-2 fill-current text-weta self-center group-hover:text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm-1 8V7H4v6h2zm2-6v6h3v-2h2v2h3V7H8zm10 6h2V7h-2v6zM9 3v2h6V3H9z"/></svg>)
        }
    }

    return (
        <div className="px-6 py-6 w-max h-96 flex flex-col group justify-around backdrop-filter backdrop-blur-xl bg-opacity-100 hover:bg-opacity-40 bg-gray-200 rounded-2xl shadow-lg transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-125 hover:z-20 hover:bg-weta ring-gray-400 ring-opacity-70 hover:ring-4 hover:shadow-xl">

            <p className="cursor-default font-body inline font-semibold text-weta group-hover:text-white ">
            {getIcon(packageD.id)}
            {packageD.title}
            </p>

            <div className="cursor-default">
            <p className="font-body text-gray-400 text-xs">Features</p>
            <ul className="list-disc list-inside mx-2 font-body text-gray-700 group-hover:text-white group-hover:text-xs">
                {packageD.keypoints.map(keypoint => (
                    <li className="text-sm my-2">{keypoint}</li>
                ) )}
            </ul>
            </div>

            <div className="cursor-default">
            <p className="font-body text-gray-400  text-xs">Price</p>
            <p className="font-body text-weta group-hover:text-green-400 text-lg font-bold">{packageD.price}<span className="text-sm text-gray-500">  /month</span></p>
            </div>
            <a className="cursor-pointer px-6 py-4 w-full text-center rounded-lg bg-weta hover:bg-gray-600 group-hover:bg-green-400 uppercase tracking-widest text-xs font-medium text-white">Select</a>

            
        </div>
    )
}

export default Card
