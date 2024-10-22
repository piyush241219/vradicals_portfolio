import React, { useEffect, useState } from 'react';
import Canvas3D from '../Canvas3d';
import Parallax, { Layer } from "react-parallax-scroll";
import { useLocation, useParams } from 'react-router-dom';
import { MdOutline360 } from 'react-icons/md';
import Navbar from '../Navbar';
import { BsBadge8kFill, BsBadgeHdFill } from 'react-icons/bs';
import { TbView360Number } from 'react-icons/tb';

import ReactPlayer from 'react-player';


export default function VRVideoDetails() {
    const [url , setUrl] = useState("")
    const location = useLocation()
    const params = useParams()
    const videoName = params.videoName;


    const videoContent = location.state;

    const device = window.navigator.platform
    const platformInfo = device.slice(0, 1);
    console.log(platformInfo);

    useEffect(() => {
        if (platformInfo === 'M' || platformInfo === 'i') {
            console.log(videoContent.path)
            const videoSource = `https://api.kalpverse.io/uploads/portfolio_videos/iphone_videos/${videoContent.path}`;
            // const videoTag = document.getElementById("video-tag");
            // const sourceTag = videoTag.querySelector("source");
            // sourceTag.src = videoSource;
            // videoTag.load('https://api.kalpverse.io/uploads/portfolio_videos/portfolio_main.mp4');
            setUrl(videoSource)
        }
        else{
            const videoSource = `https://api.kalpverse.io/api/admin/video-stream?video=${videoContent.path}`;
            // const videoTag = document.querySelector("#video-tag");
            // const sourceTag = videoTag.querySelector("source");
            // sourceTag.src = videoSource;
            // videoTag.load();
            setUrl(videoSource)
        }
        
    }, [videoName]);
console.log(url)
    return (
        <div>
            <Parallax>
                <Navbar />
                <div className="flex justify-between flex-col md:flex-row pt-20 md:px-5 video-details">
                    <div className="text-white  w-full md:w-[50%]">
                        <div className="w-full">
                            <div className="relative ">
                                {/* <video id="video-tag" width="100%" autoPlay loop muted controls playsInline>
                                    <source src={video} type="video/mp4" />
                                </video> */}
                                {
                                    <ReactPlayer id="video-tag" width="100%"  url={url} loop playing={true} controls playsinline/>
                                }
                            </div>
                            {/* <Layer className="banner banner-2" settings={{ speed: 0.45 }}>
                                <div className="img1 flex justify-center items-center">
                                    <p className="bg-black text-white p-3 rounded-md">image</p>
                                </div>
                            </Layer>
                            <Layer className="banner banner-3" settings={{ speed: 0.45 }}>
                                <div className="img2 flex justify-center items-center">
                                    <p className="bg-black text-white p-3 rounded-md">image2</p>
                                </div>
                            </Layer>
                            <Layer className="banner banner-1" settings={{ speed: 0.45 }}>
                                <div className="img3 flex justify-center items-center">
                                    <p className="bg-black text-white p-3 rounded-md">image3</p>
                                </div>
                            </Layer> */}
                        </div>
                    </div>
                    <div className="text-white  right-0 w-full md:w-[50%] px-5">
                        <h2 className="text-center text-4xl py-10 capitalize">{videoContent.headName}</h2>
                        <p>
                            {videoContent.desc}
                        </p>
                        <h1 className="font-bold py-5 text-purple-500">Key Features</h1>
                        {/* {videoContent?.keyFeatures?.map((item, index) => (
                            <div key={index}>
                                <ul className="list-disc px-10">
                                    <li>{item}</li>
                                </ul>
                            </div>
                        ))} */}
                        <ul className="list-disc px-10">
                            <li className='flex gap-2 items-center text-xl'><TbView360Number /> 360 video in VR</li>
                            <li className='flex gap-2 items-center text-xl'><BsBadge8kFill /> 8K Resolution</li>
                            <li className='flex gap-2 items-center text-xl'><BsBadgeHdFill /> Ultra HD</li>

                        </ul>
                        {/* <div className="p-10">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                            eligendi voluptatibus voluptas, minima odit facere repudiandae
                            reprehenderit, ipsam velit doloribus vel veritatis impedit neque ea
                            ad quidem itaque dolorem. Sit obcaecati similique vel, consequuntur
                            quia suscipit provident et officia voluptas tempora mollitia nemo
                            repudiandae animi Corporis tenetur numquam fuga accusantium.
                        </div> */}
                    </div>
                </div>
            </Parallax>
        </div>
    );
}