import React from 'react'

function Navbar() {
    return (
        <div className='w-full py-6 flex items-center justify-between'>
            <div className='w-1/3'>
                <img
                    src="/assets/icon/brand_logo.svg"
                    alt="logo"
                    className='bg-cover bg-center  pl-3 cursor-pointer'
                />
            </div>
            <div className='w-1/4 ml-24'>
                <li className='list-none flex gap-3'>
                    <a className='uppercase text-zinc-300 font-sans font-semibold hover:underline' href="#">Menu</a>
                    <a className='uppercase text-zinc-300 font-sans font-semibold hover:underline' href="#">Location</a>
                    <a className='uppercase text-zinc-300 font-sans font-semibold hover:underline' href="#">About</a>
                    <a className='uppercase text-zinc-300 font-sans font-semibold hover:underline' href="#">Contact</a>
                </li>
            </div>
            <div className='w-1/3'>
            </div>
            <button className='px-3 py-1.5 mr-3 text-white rounded-xl bg-red-600 hover:bg-black hover:duration-300 duration-300'>login</button>
        </div>
    )
}

export default Navbar