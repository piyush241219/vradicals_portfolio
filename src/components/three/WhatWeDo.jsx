import React, { useState } from 'react';
import Canvas3D from './Canvas3d';
import { useNavigate } from 'react-router-dom';
import bgVid from '../../assets/bg-vid.mp4'
import { IoIosArrowDown } from 'react-icons/io';
import { MdOutline360 } from 'react-icons/md';
export default function WhatWeDo() {
    const [newPath, setNewPath] = useState("./VR3.glb");
    const [selectedCategory, setSelectedCategory] = useState("Virtual reality");

    const apps = "./s23Ultra/scene.glb";
    const aiBot = "./Robo.glb";
    const web = "./Computer.glb";
    const vr = "./VR3.glb";

    const handlePathChange = (path, category) => {
        setNewPath(path);
        setSelectedCategory(category);
    };

    const data = [
        { name: "Virtual reality", description: "We create immersive VR experiences using the latest in 3D modeling and interactive design, transforming virtual environments into realistic and engaging worlds.Our VR applications are developed to offer seamless integration with various hardware platforms, enhancing user engagement and interactivity." },
        { name: "artifical intelligence", description: "Create intelligent chatbots using Python, Flask, large language models, and Generative AI techniques to enhance customer interaction.Leverage deep learning and computer vision for advanced image recognition and analysis in your AI projects." },
        { name: "web developement", description: "Our web development stack includes React, JavaScript, Vue, and Next.js for creating highly responsive and user-friendly frontends.For backend , we utilize Node.js, MongoDB, Express, and SQL databases like PostgreSQL, ensuring robust and scalable server-side solutions." },
        { name: "app development", description: "We develop cross-platform mobile applications using React Native and Flutter, providing seamless performance on both Android and iOS devices.Our native app development expertise covers both Android and iOS platforms, ensuring optimized performance and user experience for each operating system." },
    ];

    return (
        <>
            <div className='bg-video bg-video relative h-screen'>
                <video src={bgVid} autoPlay={true} loop muted playsInline controls={false} className=" h-full object-cover"
                ></video>
                <div className="absolute top-0 left-0 bottom-0 right-0 ">
                    <div className='flex md:justify-between flex-col md:gap-0 gap-10 md:flex-row w-full h-full  '>
                        <div className="w-full flex items-center  flex-col md:px-20  we-do !max-h-max  ">
                            <ul className='text-[#B366CF]  md:text-7xl   flex flex-col flex-wrap md:gap-5 gap-1 w-full we-do-ul md:h-[80%] h-full justify-evenly  '>
                                <li className='w-full md:!w-[90%] cursor-pointer category md:text-[3vw]  bg-[#0000004d]' onClick={() => handlePathChange(vr, "Virtual reality")}> <a>Virtual Reality</a> </li>
                                <li className='w-full md:!w-[90%] cursor-pointer category md:text-[3vw]  bg-[#0000004d]' onClick={() => handlePathChange(aiBot, "artifical intelligence")}> <a>Artifical Intelligence</a> </li>
                                <li className='w-full md:!w-[90%] cursor-pointer category md:text-[3vw]  bg-[#0000004d]' onClick={() => handlePathChange(web, "web developement")}> <a>WEB Developement</a> </li>
                                <li className='w-full md:!w-[90%] cursor-pointer category md:text-[3vw]  bg-[#0000004d]' onClick={() => handlePathChange(apps, "app development")}> <a>APP Developement</a> </li>
                            </ul>
                        </div>
                        <div className='w-full  flex  overflow-x-hidden  flex-col items-center  '>
                            <div className=' h-auto   cursor-grab relative '>
                                <Canvas3D path={newPath} />
                                <p className='absolute left-0 translate-x-52 right-0 text-center text-white bottom-5 flex items-center gap-2'><MdOutline360 /> Rotate 360 </p>
                            </div>
                            <div className='md:px-0 px-5  portfolio-home-content '>
                                {selectedCategory && (
                                    <div className='text-white   xl:px-10 xl:lg:text-xl 2xl:text-3xl xl:mt-[2rem]'>
                                        <h2 className='text-center capitalize text-[#b366cf] font-bold '>{data.find(item => item.name === selectedCategory).name}</h2>
                                        <p>{data.find(item => item.name === selectedCategory).description}</p>
                                    </div>
                                )}
                                {!selectedCategory && (
                                    <div className='text-white   xl:px-10 xl:lg:text-xl 2xl:text-3xl xl:mt-[2rem]'>
                                        <h2 className='text-center capitalize text-[#b366cf] font-bold '>{data.find(item => item.name === selectedCategory).name}</h2>
                                        <p>{data.find(item => item.name === selectedCategory).description}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <div className='md:px-0 px-5 small-dev-div '>
                            {selectedCategory && (
                                <div className='text-white  mt-[2rem]  '>
                                    <h2 className='text-center capitalize text-[#b366cf] font-bold '>{data.find(item => item.name === selectedCategory).name}</h2>
                                    <p>{data.find(item => item.name === selectedCategory).description}</p>
                                </div>
                            )}
                            {!selectedCategory && (
                                <div className='text-white  mt-[2rem]  '>
                                    <h2 className='text-center capitalize text-[#b366cf] font-bold '>{data.find(item => item.name === selectedCategory).name}</h2>
                                    <p>{data.find(item => item.name === selectedCategory).description}</p>
                                </div>
                            )}
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    );
}
