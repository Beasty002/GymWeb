import React from 'react'

export default function Button(props) {
    const { text } = props
    return (
        <button className='px-8 py-4 mx-auto rounded-md bg-slate-950 border-[2px] border-blue-400 border-solid blueShadow duration-200'>
            <p>{text}</p></button>

    )
}
