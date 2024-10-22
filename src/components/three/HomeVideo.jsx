import React, { useEffect } from 'react'

export default function HomeVideo() {
    // useEffect(()=>{
    //      // const videoName = event.target.getAttribute("name");
    //     const videoSource = `https://api.kalpverse.io/api/admin/video-stream?video=portfolio_main.mp4`;
    //     const videoTag = document.querySelector("#video-tag");
    //     const sourceTag = videoTag.querySelector("source");

    //     sourceTag.src = videoSource;
    //     videoTag.load(); 
    // })

    const device = window.navigator.platform
    const platformInfo = device.slice(0, 1);



    return (
        <>
            {
                platformInfo === 'M' || platformInfo === 'i' ? (
                    <>
                        <div className=' md:mt-5  mt-5'>
                            <video src="https://api.kalpverse.io/uploads/portfolio_videos/iphone_videos/portfolio_main.mp4" id="video-tag" width="100%" autoPlay loop muted playsInline controls >
                                <source type="video/mp4" />
                            </video>

                        </div>
                    </>
                ) :
                    <div className=' md:mt-5  mt-5'>
                        <video src="https://api.kalpverse.io/api/admin/video-stream?video=portfolio_main.mp4" id="video-tag" width="100%" autoPlay loop muted controls playsInline controlsList='nodownload'>
                            <source type="video/mp4" />
                        </video>
                    </div>
            }
        </>
    )
}
