import React from 'react'


function Button({ text, icon, className }) {
    return (
        <button className={`flex items-center gap-2 rounded-md px-4 py-1.5 bg-black text-white hover:bg-white hover:text-black hover:duration-300 duration-300 ${className}`}>{text}{icon}</button>
    )
}

export default Button