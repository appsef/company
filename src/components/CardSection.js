import React from 'react'
import Card from './Card'

const CardSection = () => {

    
    const package_one = { title: "Basic Plan", keypoints: ["Some Cool feature", "Some Cool feature again","Some more Cool feature", "Some Coolest feature",], price: "$500" , id: 0};
    const package_two = { title: "Premium Plan", keypoints: ["Some Cool feature", "Some Cool feature again","Some more Cool feature", "Some Coolest feature",], price: "$500" , id: 1};
    const package_three = { title: "Commercial Plan", keypoints: ["Some Cool feature", "Some Cool feature again","Some more Cool feature", "Some Coolest feature",], price: "$500" , id: 2};

    return (
        <div className="relative h-screen bg-weta flex flex-col justify-evenly">

        <div className="left-0 right-0 top-6 mx-auto">
            <p className=" font-body font-semibold text-lg text-white text-center ">Pricing</p>
            <div className="flex mx-auto self-center justify-self-center bg-gray-200 w-12 h-1 mt-2 mb-2"></div>
            <p className=" font-body font-light text-lg text-center text-gray-400">Venenatis vestibulum aliquam id lobortis pellentesque quisque. <br />Eget in auctor et ut eu amet.</p>
        </div>

        <div className="flex flex-row w-min gap-6 mx-20 h-auto  self-center">
          
          <Card packageD={package_one}/>

          <Card packageD={package_two}/>

          <Card packageD={package_three}/>

        </div>

      </div>
    )
}

export default CardSection
