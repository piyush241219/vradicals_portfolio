import React, { useEffect, useState } from 'react';
import bearImg from '../../../assets/vradicals/bear.png';
import desertImg from '../../../assets/vradicals/desert.png';
import CarConfigImg from '../../../assets/vradicals/carconfig.png';
import volcanoImg from '../../../assets/vradicals/volcano.png';
import beachImg from '../../../assets/vradicals/beach.png';
import birdImg from '../../../assets/vradicals/bird.png';
import farmImg from '../../../assets/vradicals/farm.png';
import traditionalImg from '../../../assets/vradicals/traditional characters.png';
import amazonImg from '../../../assets/vradicals/amazon.png';
import officeImg from '../../../assets/vradicals/office.png';
import eyeImg from '../../../assets/vradicals/eye.png';
import glacierImg from '../../../assets/vradicals/glacier.png';
import terrianImg from '../../../assets/vradicals/terrain.png';
import HoliImg from '../../../assets/vradicals/holi.png';
import { Link, useNavigate } from 'react-router-dom';
import Atropos from 'atropos/react';
import { FaArrowRight } from 'react-icons/fa';

export default function VRVideos() {

  const videoDetails = [
    { logo: CarConfigImg, name: "Car_Configurator.mp4", headName: "Car Configurator", description: "A car configurator offers a digital platform that enables users to personalize various elements and components of a vehicle, enhancing their engagement and comprehension of the product" },
    { logo: officeImg, name: "Office.mp4", headName: "Office Virtual Tour", description: "Vradicals' 360 VR video takes viewers on an immersive journey through our dynamic office space, showcasing the innovative work environment and collaborative spirit that defines our company culture. Vradicals' captivating 360 VR video offers an unparalleled glimpse into the heart of our company" },
    { logo: desertImg, name: "desert.mp4", headName: "Desert", description: "A desert is a landscape where little precipitation occurs and, consequently, living conditions create unique biomes and ecosystems. The lack of vegetation exposes the unprotected surface of the ground to denudation. About one-third of the land surface of the Earth is arid or semi-arid." },
    { logo: bearImg, name: "Bear.mp4", headName: "Polar Bear", description: "Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans. Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout most of the Northern Hemisphere and partially in the Southern Hemisphere. ", keyFeatures: ["hello1", "hello2", "hello3", "hello4"] },
    { logo: eyeImg, name: "eye.mp4", headName: "Human Eye", description: "Vradicals' pioneering 360 VR video, 'The Human Eye', takes viewers on an unprecedented journey inside the human eye, offering an immersive and educational experience that reveals the intricate structures and functions of this remarkable organ in stunning detail." },
    { logo: volcanoImg, name: "Volcanic.mp4", headName: "Volcano", description: "A volcano is a rupture in the crust of a planetary-mass object, such as Earth, that allows hot lava, volcanic ash, and gases to escape from a magma chamber below the surface." },
    { logo: traditionalImg, name: "traditional_characters.mp4", headName: "Traditional Characters", description: "The farm's lush fields and green pastures stretch as far as the eye can see, where tractors rumble and crops grow, nourished by the sun and the land's rich soil." },
    { logo: beachImg, name: "Beach.mp4", headName: "Beach", description: "A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock" },
    // { logo: birdImg, name: "Bird_Kingdom.mp4", headName: "Bird Kingdom", description: "The birds' kingdom soars high above, a symphony of feathers and melodies, where winged creatures glide effortlessly through the endless skies, their songs echoing through the vast expanse of their aerial domain." },
    // { logo: farmImg, name: "Farm.mp4", headName: "Farm", description: "The farm's lush fields and green pastures stretch as far as the eye can see, where tractors rumble and crops grow, nourished by the sun and the land's rich soil." },
    // { logo: amazonImg, name: "Amazon.mp4", headName: "Dashavatar", description: "Vradicals' groundbreaking 360 VR video for Amazon enables seamless product exploration. Users can log in and immerse themselves in interactive product experiences, effortlessly rotating and zooming in on products to make informed purchasing decisions. This innovative solution revolutionizes e-commerce and enhances the shopping" },
    { logo: terrianImg, name: "TerrainFX.mp4", headName: "Terrain", description: "The rugged terrain, characterized by steep cliffs, dense forests, and winding rivers, challenges even the most seasoned adventurers, offering breathtaking vistas and diverse ecosystems that teem with wildlife, making it a haven for nature enthusiasts and thrill-seekers alike" },
    { logo: glacierImg, name: "GlacierFX.mp4", headName: "Glacier", description: "The massive glacier, with its towering ice formations and deep crevasses, slowly carves through the mountainous landscape, its ancient, pristine ice reflecting shades of blue and white, creating a mesmerizing and ever-changing natural wonder." },
    { logo: HoliImg, name: "Holi.mp4", headName: "Holi", description: " Holi, the vibrant festival of colors, bursts to life with jubilant crowds dousing each other in vivid powders, dancing to lively music, and celebrating the triumph of good over evil, fostering joy, unity, and renewal." },
  ];
  const navigate = useNavigate()
  const handleButtonClick = (path, headName, desc, keyFeatures) => {
    console.log(keyFeatures)
    navigate("/video-details", { state: { path, headName, desc, keyFeatures } });

  };
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <div className='md:px-20 md:mx-20 mx-5 grid grid-cols-4 gap-4  shadow-lg py-5 justify-center items-center vr-videos '>
        {videoDetails.map((item, index) => (
          isSmallScreen ? (

            <div key={index} className='video-grid-item '>
              <div

                className=' relative flex justify-center '
              >
                <img src={item.logo} alt="" className='w-[100%]' name={item.name} />
                <p onClick={() => handleButtonClick(item.name, item.headName, item.description, item.keyFeatures)} className='video-text text-center cursor-pointer md:text-sm text-[8px] !text-white bg-[#0000006e] font-bold capitalize flex items-center gap-2 justify-around'>{item.headName}<FaArrowRight className='text-[]' /></p>
              </div>
            </div>

          ) : (
     
            <div key={index} className='video-grid-item  w-[85%] '>
              <div
                onClick={() => handleButtonClick(item.name, item.headName, item.description, item.keyFeatures)}
                className=' relative flex justify-center cursor-pointer'
              >
                <img src={item.logo} alt="" className=' ' name={item.name} />
                <div className="!flex !justify-center">
                  <p className='video-text text-center  md:text-sm text-[8px]   !text-white bg-[#0000006e] font-bold capitalize flex items-center gap-2 justify-around'>{item.headName}<FaArrowRight className='text-[]' /></p>
                </div>
              </div>
            </div>
       
          )
        ))}
      </div>
    </div>
  );
}
