import React from 'react'
import LoaderImg from '../../assets/logo.png'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
export default function HomeLoader() {
    return (
        <div className='flex items-center flex-col justify-center h-[100vh]'>
            <img src={LoaderImg} alt="" />
            <p className="flex items-center gap-2 text-white ">Loading <AiOutlineLoading3Quarters className="text-white text-xl font-bold animate-spin" /></p>
        </div>
    )
}
