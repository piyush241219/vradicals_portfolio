import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Canvas3D from "../Canvas3d";
import Parallax, { Layer } from "react-parallax-scroll";
import { katanaContent, lionContent } from "../../../content";
import { MdOutline360 } from "react-icons/md";
import Navbar from "../Navbar";
import { SiAdobephotoshop } from "react-icons/si";
import mayaImg from '../../../assets/maya.png'
import zbrushImg from '../../../assets/zbrush.png'
import substancepainterImg from '../../../assets/substancepainter.png'
import photoshopImg from '../../../assets/photoshop.png'
export default function ModelDetails3d() {
  const location = useLocation();

  const { path } = location.state || { path: "./katana/scene.gltf" };
  const name = path.split("/")[1];
  console.log(location.state);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <Parallax>
      <Navbar />
      <div className="flex justify-between flex-col md:flex-row pt-10">
        <div className="text-white  w-full md:w-[50%] ">
          <div className="w-full ">
            {" "}
            <div className="relative cursor-grab model-details">
              <Layer className="" settings={{ speed: 0.45 }} >
                <Canvas3D path={path} />
                <p className="justify-center absolute text-white bottom-2 right-0 left-0 z-10 flex gap-2 items-center">
                  Rotate for 360 experience <MdOutline360 />
                </p>
              </Layer>
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
        <div className="text-white  w-full md:w-[50%]   right-0 px-5">
          { }
          <h2 className="text-center text-4xl py-10 capitalize">{location.state.headName}</h2>
          <p>
            {location.state.desc}
          </p>
          <h1 className="font-bold py-5 text-purple-500">Software Used</h1>
          <ul className="list-disc px-10 capitalize">

            <li className="flex items-center text-xl gap-4"><img src={photoshopImg} alt="" width={40} />photoshop</li>
            <li className="flex items-center text-xl gap-2"><img src={zbrushImg} alt="" width={50} />zbrush</li>
            <li className="flex items-center text-xl gap-2"><img src={substancepainterImg} alt="" width={50} />3d substance painter</li>
            <li className="flex items-center text-xl gap-2"><img src={mayaImg} alt="" width={50} />Maya</li>




          </ul>
          {/* <div className="p-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            eligendi voluptatibus voluptas, minima odit facere repudiandae
            reprehenderit, ipsam velit doloribus vel veritatis impedit neque ea
            ad quidem itaque dolorem. Sit obcaecati similique vel, consequuntur
            quia suscipit provident et officia voluptas tempora mollitia nemo
            repudiandae animi! Corporis tenetur numquam fuga accusantium.
          </div> */}
        </div>
      </div>
    </Parallax>
  );
}
