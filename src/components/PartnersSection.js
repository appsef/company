import React from 'react'
import PartnerDiv from './PartnerDiv';

const PartnersSection = () => {

    
    const package_one = { title: "Basic Plan", keypoints: ["Some Cool feature", "Some Cool feature again","Some more Cool feature", "Some Coolest feature",], price: "$300" , id: 0};
    const package_two = { title: "Premium Plan", keypoints: ["Some Cool feature", "Some Cool feature again","Some more Cool feature", "Some Coolest feature",], price: "$500" , id: 1};
    const package_three = { title: "Commercial Plan", keypoints: ["Some Cool feature", "Some Cool feature again","Some more Cool feature", "Some Coolest feature",], price: "$800" , id: 2};

    // TODO -> change from string array to array of object
    const partners = [ 'http://via.placeholder.com/150', 'http://via.placeholder.com/150', 'http://via.placeholder.com/150', 'http://via.placeholder.com/150',
    'http://via.placeholder.com/150','http://via.placeholder.com/150','http://via.placeholder.com/150','http://via.placeholder.com/150', ]

    return (
        <div className="relative py-10 md:py-0 md:h-screen bg-white bg-opacity-90 flex flex-col justify-evenly">

        <div className="left-0 right-0 top-6 mx-auto">
            <p className=" font-body font-semibold text-2xl text-weta text-center ">Our Partners</p>
            <div className="flex mx-auto self-center justify-self-center bg-gray-600 w-12 h-1 mt-2 mb-2"></div>
            <p className=" font-body font-light text-lg text-center text-gray-500">Venenatis vestibulum aliquam id lobortis pellentesque quisque. <br />Eget in auctor et ut eu amet.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 grid-flow-row mt-6 md:mt-0 md:grid-cols-4 w-max mx-20 h-auto  self-center">
         
         <PartnerDiv partners={partners} />

        </div>

        <p className="font-body mt-6 md:mt-0 font-light text-sm text-center text-gray-400">Venenatis vestibulum aliquam id lobortis pellentesque quisque. <br />Eget in auctor et ut eu amet.</p>

      </div>
    )
}

export default PartnersSection;
