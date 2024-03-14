import React from 'react'

function LandingPage() {
    return (
        <div className='w-full px-20 mt-4 py-2 flex justify-between'>
            <div className='w-1/2 flex flex-col'>
                <h1 className='text-8xl text-zinc-200 uppercase font-mono font-bold leading-none tracking-tight'>Your Feet</h1>
                <h1 className='text-8xl text-zinc-200 uppercase font-mono font-bold leading-none tracking-tight'>Deserve</h1>
                <h1 className='text-8xl text-zinc-200 uppercase font-mono font-bold leading-none tracking-tight'>The Best</h1>

                <p className='text-zinc-400 w-2/3 text-xs mt-4'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className='flex my-4 items-center gap-8'>
                    <button className='px-2.5 py-1.5 bg-red-600 text-white hover:bg-black  hover:duration-300 duration-300 rounded-xl'>Shop Now</button>
                    <button className='px-2.5 py-1.5 border-[2px] border-red-600 text-white hover:bg-red-600 hover:duration-300 duration-300 rounded-xl'>Category</button>
                </div>

                <p className='text-zinc-400 text-xs my-3'>Also Avaliable on</p>
                <div className='flex gap-4'>
                    <img src="/assets/icon/flipkart.svg" alt="" />
                    <img src="/assets/icon/amazon.svg" alt="" />
                </div>
            </div>
            <div className='w-1/2 '>
                <img src="assets/image/shoe_image.svg" alt="" />
            </div>
        </div>
    )
}

export default LandingPage
