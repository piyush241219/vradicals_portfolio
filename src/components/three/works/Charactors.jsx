import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import buddhismImg from '../../../assets/models/buddhism.png'
import hinduModelImg from '../../../assets/models/hindu.png'
import sardarjiImg from '../../../assets/models/sardarji.png'
import astronautImg from '../../../assets/models/astronaut.png'
import christianImg from '../../../assets/models/christian.png'

import trekkerImg from '../../../assets/models/mountain-trekker.png'

import islamImg from '../../../assets/models/islam.png'
import Atropos from 'atropos/react';
import { FaArrowRight } from 'react-icons/fa';

export default function Charactors() {
  const navigate = useNavigate()
  const charactorDetails = [

    { logo: buddhismImg, headName: "Monk", name: "./Buddhist.glb", description: "Buddhism is a philosophy and religion founded in ancient India by Siddhartha Gautama,emphasizing the Four Noble Truths and the Eightfold Path to achieve enlightenment and liberation from suffering", keyFeatures: ["hello1", "hello2", "hello3", "hello4"] },
    { logo: trekkerImg, headName: "mountain tracker", name: "./mountain-trekker.glb", description: "'Mountain Girl' - a free-spirited adventurer, embracing nature's beauty, with a wild heart and a love for the great outdoors, untamed and unbridled." },
    { logo: hinduModelImg, headName: "Priest", name: "./panditji/5/Hindu.gltf", description: "A desert is a landscape where little precipitation occurs and, consequently, living conditions create unique biomes and ecosystems. The lack of vegetation exposes the unprotected surface of the ground to denudation. About one-third of the land surface of the Earth is arid or semi-arid." },
    { logo: sardarjiImg, headName: "Nihang", name: "./sardarji/SardarJi.gltf", description: "A Sikh man is often identified by his turban and untrimmed beard. He follows Sikhism, a religion founded in India that emphasizes equality and service to others. His last name might be Singh, meaning " },
    { logo: astronautImg, headName: "astronaut", name: "./Sunita.glb", description: "Astronauts are space travelers who venture into the unknown, pushing the boundaries of human exploration, conducting scientific research, and inspiring future generations with their bravery and unwavering dedication to the pursuit of space discovery." },
    { logo: christianImg, headName: "Father", name: "./Christian.glb", description: "A Christian individual is often identified by wearing a cross necklace or having a Bible in hand. They follow Christianity, a religion founded on the teachings of Jesus Christ that emphasizes love, compassion, and forgiveness. Their last name might be Smith, a common surname reflecting a rich tradition of various professions." },
    { logo: islamImg, headName: "Imam", name: "./islam.glb", description: "Islam, meaning 'submission' in Arabic, is a monotheistic religion with nearly 2 billion followers worldwide.Muslims believe in one God, Allah, and follow the teachings of the prophet Muhammad, whose revelations are compiled in the القرآن (Quran). Their practices include daily prayers, charity, fasting during Ramadan, and a pilgrimage to Mecca if able. " },

  ];
  const handleButtonClick = (path, desc, headName, keyFeatures) => {
    console.log(keyFeatures)
    navigate("/model", { state: { path, desc, headName, keyFeatures } });

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
      <div className='md:px-20 md:mx-20 mx-5 grid grid-cols-3 gap-4  shadow-lg py-5 justify-center items-center home-models'>
        {charactorDetails.map((item, index) => (
          isSmallScreen ? (

            <div key={index} className='model-grid-item flex justify-center w-full relative img-bg'>
              <div

                className=' flex justify-center'
              >
                <img src={item.logo} alt="" name={item.name} className="md:w-[80%] w-full " />
                <p onClick={() => handleButtonClick(item.name, item.description, item.headName, item.keyFeatures)} className='model-text md:text-sm text-[8px] p-0 m-0 font-bold text-center !text-white bg-[#0000006e] capitalize absolute bottom-0 cursor-pointer flex items-center gap-2 justify-around'>{item.headName}<FaArrowRight className='text-[]' /></p>
              </div>
            </div>

          ) : (
            // <Atropos
            //   activeOffset={20}
            //   shadowScale={.05}
            //   onRotate={(x, y) => console.log("Rotate", x, y)}
            //   className="my-atropos">
              <div key={index} className=' md:w-[80%] model-grid-item flex justify-center w-full relative img-bg'>
                <div
                  onClick={() => handleButtonClick(item.name, item.description, item.headName, item.keyFeatures)}
                  className=' flex justify-center cursor-pointer'
                >
                  <img src={item.logo} alt="" name={item.name} className=" w-full " />
                  <p className='model-text md:text-sm text-[8px] p-0 m-0 font-bold text-center !text-white bg-[#0000006e] capitalize absolute bottom-0  flex items-center gap-2 justify-around'>{item.headName}<FaArrowRight className='text-[]' /></p>
                </div>
              </div>
            // </Atropos>
          )
        ))}
      </div>
    </div>
  )
}
