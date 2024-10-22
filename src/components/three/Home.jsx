import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Parallax, { Layer } from "react-parallax-scroll";
import Atropos from "atropos/react";
import { FaStar, FaUser } from "react-icons/fa";
import { BsArrowDown, BsArrowDownCircle } from "react-icons/bs";
import Navbar from "./Navbar";
import Banner from "./Banner";
import WhatWeDo from "./WhatWeDo";
import HomeVideo from "./HomeVideo";
import Works from "./Works";
import Analysis from "./Analysis";
import Footer from "./Footer";
import { IoIosArrowDown } from "react-icons/io";
import HomeLoader from "./HomeLoader";

export default function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = (path) => {
    navigate("/model", { state: { path } });
  };

  const handleScrollClick = () => {
    window.scrollBy({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <HomeLoader />
      ) : (
        <Parallax>
          <Layer className="relative" settings={{ speed: 0.45 }}>
            <Navbar />
            <Banner />
          </Layer>
          
              <WhatWeDo />
           
          <HomeVideo />
          <Layer className="work-bg " settings={{ speed: 0.85 }}>
          <Works />
          </Layer>
          <Analysis />
          <Footer />
          <button
            className="bg-[#b366cf] text-white border animate-bounce absolute bottom-10 right-3 rounded-full p-3 z-10 scroll-btn"
            onClick={handleScrollClick}
          >
            <IoIosArrowDown className="text-white text-lg font-bold" />
          </button>
        </Parallax>
      )} 
    </div>
  );
}


// {/* <>
// <Parallax>
//   {/* navbar */}

//   <div>
//     <Layer className="banner layerimg relative" settings={{ speed: 0.3 }}>
//       <div className=" w-full absolute top-[10rem]">
       
//       </div>
//       <div className="text-center mt-[10rem] ">
//         <h1 className="text-4xl font-bold text-white text-[5vw]">
//           VRADICALS
//         </h1>
//         <p className="text-2xl mt-[-0.5rem] text-purple-900 font-bold">
//           Shaping the future in metaverse
//         </p>
//       </div>
//       <a className="flex gap-2 items-center absolute bottom-5 animate-bounce text-white " href="#works">
//         Scroll down to explore <BsArrowDownCircle />
//       </a>
//     </Layer>
//   </div>
//   <h2 className="text-center text-white  pt-20 text-4xl font-bold" id="works">
//     {" "}
//     Our Works
//   </h2>
//   <Layer className="" settings={{ speed: 0.45 }}>
//     <div className="flex justify-center flex-col items-center h-[100vh]">
//       <div className="text-white flex gap-5">
//         <p className="bg-white p-2 rounded-md text-black flex items-center">
//           <img
//             src="https://cdn.dribbble.com/userupload/7851361/file/still-14e4917edafa428184d0f4d5504f1445.gif?resize=400x0"
//             width={50}
//             alt=""
//           />{" "}
//           Character
//         </p>
//         <p className="bg-white p-2 rounded-md text-black flex items-center">
//           <img
//             src="https://static.vecteezy.com/system/resources/thumbnails/007/634/526/small/environment-logo-icon-design-template-free-vector.jpg"
//             alt=""
//             width={50}
//           />{" "}
//           Environment
//         </p>
//         <p className="bg-white p-2 rounded-md text-black flex items-center">
//           <img
//             src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/02/08131817/architectural-building-construction-by-bryad-brandcrowd.png"
//             alt=""
//             width={50}
//           />{" "}
//           Architecture
//         </p>
//       </div>
//       <div className="flex justify-between flex-wrap gap-3 mt-5 relative">
//         <Atropos
//           activeOffset={40}
//           shadowScale={1.05}
//           onEnter={() => console.log("Enter")}
//           onLeave={() => console.log("Leave")}
//           onRotate={(x, y) => console.log("Rotate", x, y)}
//           className="my-atropos"
//         >
//           <div>
//             <img
//               src="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg"
//               alt=""
//               width={200}
//             />
//             <button
//               onClick={() =>
//                 handleButtonClick("./lion_dance_monster/scene.gltf")
//               }
//               className="p-3 rounded-md bg-green-500 w-full"
//             >
//               Dragon
//             </button>
//           </div>
//         </Atropos>
//         <Atropos className="my-atropos">
//           <div>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2RLOBO8DYvk8aAUNEs6DJzCJzlgHT7HfAg&s"
//               alt=""
//               width={200}
//             />
//             <button
//               onClick={() => handleButtonClick("./katana/scene.gltf")}
//               className="p-3 rounded-md bg-green-500 w-full"
//             >
//               Katana
//             </button>
//           </div>
//         </Atropos>
//         <Atropos className="my-atropos">
//           <div>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2RLOBO8DYvk8aAUNEs6DJzCJzlgHT7HfAg&s"
//               alt=""
//               width={200}
//             />
//             <button
//               onClick={() =>
//                 handleButtonClick("./last_stronghold/scene.gltf")
//               }
//               className="p-3 rounded-md bg-green-500 w-full"
//             >
//               Katana
//             </button>
//           </div>
//         </Atropos>
//       </div>
//       <div className="flex justify-between flex-wrap gap-3 mt-5 relative">
//         <Atropos
//           activeOffset={40}
//           shadowScale={1.05}
//           onEnter={() => console.log("Enter")}
//           onLeave={() => console.log("Leave")}
//           onRotate={(x, y) => console.log("Rotate", x, y)}
//           className="my-atropos"
//         >
//           <div>
//             <img
//               src="https://img.freepik.com/free-photo/dragons-fantasy-artificial-intelligence-image_23-2150400884.jpg"
//               alt=""
//               width={200}
//             />
//             <button
//               onClick={() =>
//                 handleButtonClick("./lion_dance_monster/scene.gltf")
//               }
//               className="p-3 rounded-md bg-green-500 w-full"
//             >
//               Dragon
//             </button>
//           </div>
//         </Atropos>
//         <Atropos className="my-atropos">
//           <div>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2RLOBO8DYvk8aAUNEs6DJzCJzlgHT7HfAg&s"
//               alt=""
//               width={200}
//             />
//             <button
//               onClick={() => handleButtonClick("./katana/scene.gltf")}
//               className="p-3 rounded-md bg-green-500 w-full"
//             >
//               Katana
//             </button>
//           </div>
//         </Atropos>
//         <Atropos className="my-atropos">
//           <div>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2RLOBO8DYvk8aAUNEs6DJzCJzlgHT7HfAg&s"
//               alt=""
//               width={200}
//             />
//             <button
//               onClick={() =>
//                 handleButtonClick("./last_stronghold/scene.gltf")
//               }
//               className="p-3 rounded-md bg-green-500 w-full"
//             >
//               Katana
//             </button>
//           </div>
//         </Atropos>
//       </div>
//       <div className="flex justify-between text-white gap-10 mt-10">
//         <div className="border-r-2 px-5 w-[20rem]">
//           50+ <br /> websites and apps
//         </div>
//         <div className="border-r-2 px-5 w-[20rem]">
//           100+ <br /> 3d models
//         </div>
//         <div className="border-r-2 px-5 w-[20rem]  ">
//           <span className="flex gap-2">
//             4.5 <FaStar />
//           </span>{" "}
//           Ratings
//         </div>
//       </div>
//     </div>
//   </Layer>
// </Parallax>
// </> */}