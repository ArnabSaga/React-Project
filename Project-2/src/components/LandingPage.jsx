import React from 'react'
import Button from './Button'
import { MdOutlineMessage } from "react-icons/md";
import { MdAddCall } from "react-icons/md";

function LandingPage() {
    return (
        <div className='w-full'>
            <h1 className='font-mono leading-none tracking-tighter font-bold mt-4 pl-6 text-white text-5xl'>Contact Us</h1>
            <p className='px-10 mt-4 text-white font-medium text-sm'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            <div className='mb-4 flex justify-center'>
                <div className='w-1/2'>
                    <div className='flex gap-40 mt-5 mx-16'>
                        <Button icon={<MdOutlineMessage />} text="VIA SUPPORT CHAT" />
                        <Button icon={<MdAddCall />} text="VIA CALL" />
                    </div>
                    <div>
                        <Button className={`mt-4 ml-6 px-52 bg-white text-black hover:bg-black hover:text-white hover:duration-300 duration-300 `} icon={<MdOutlineMessage />} text="VIA EMAIL FROM" />
                    </div>
                    <form>
                        <div className='mt-5 ml-2'>
                            <div className='mb-4'>
                                <input
                                    className='shadow appearance-none border rounded w-full py-2 px-3 mx-1.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='Name'
                                    type='text'
                                    placeholder='Name'
                                />
                            </div>
                            <div className='mb-4'>
                                <input
                                    className='shadow appearance-none border rounded w-full py-2 px-3 mx-1.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='Email'
                                    type='email'
                                    placeholder='Email'
                                />
                            </div>
                            <div className='mb-4'>
                                <input
                                    className='shadow appearance-none border rounded w-full py-2 px-3 mx-1.5 text-gray-700 h-36 leading-tight focus:outline-none focus:shadow-outline'
                                    id='Text'
                                    type='text'
                                    placeholder='Text'
                                />
                            </div>
                        </div>
                    </form>
                    <div className='flex justify-end mr-4'>
                        <Button text="SUBMIT" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <img
                        src="assets/Service.png"
                        alt="Service"
                        width={495}
                        height={495}
                        className=''
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingPage