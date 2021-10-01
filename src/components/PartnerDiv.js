import React from 'react'

const PartnerDiv = ({ partners }) => {
    return (
        partners.map(partner => (
            <div className="col-span-1 w-20 h-20 bg-gray-400">
             <img src={partner} />
         </div>
        ))
    )
}

export default PartnerDiv
