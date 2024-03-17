import React from 'react'

function Navbar() {
    return (
        <div className='w-full py-6 px-4 flex justify-between'>
            <div className='w-1/2 pl-4'>
                <img
                    src="/assets/logo-white-transparent.png"
                    alt="logo"
                    width={120}
                    className='cursor-pointer'
                />
            </div>
            <div className='w-1/2 pr-4'>
                <li className='list-none flex justify-end gap-7'>
                    <a href="#" className='font-mono text-lg text-white hover:underline'>Home</a>
                    <a href="#" className='font-mono text-lg text-white hover:underline'>About</a>
                    <a href="#" className='font-mono text-lg text-white hover:underline'>Product</a>
                </li>
            </div>
        </div>
    )
}

export default Navbar