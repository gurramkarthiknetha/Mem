import React from 'react'

import { X } from 'lucide-react';
function Popup({close}) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-55 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-[rgb(38,56,91)] rounded-lg h-[50vh] w-[50vh]'>
            <button onClick={close} className= ' text-white float-end'><X/></button>
            <div>
                <div>
                    <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popup