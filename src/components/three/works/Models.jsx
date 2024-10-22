import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import kedarnathImg from '../../../assets/models/kedarnath.png';
import dashavatarImg from '../../../assets/models/dashavatar.png';
import Atropos from 'atropos/react';
import { FaArrowRight } from 'react-icons/fa';

export default function Models() {
  const navigate = useNavigate();
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

  const modelDetails = [
    { logo: dashavatarImg, headName: "Dashavatar", name: "./dashavatar.glb", description: "Dashavatara refers to the ten major incarnations of Vishnu, the Hindu god of preservation. Vishnu descends to Earth in various forms, like a fish or a human, to restore balance and defeat evil whenever needed. These avatars are revered figures in Hinduism, with Krishna and Rama among the most well-known. " },
    { logo: kedarnathImg, headName: "Kedarnath", name: "./kedarnath.glb", description: "Kedarnath is a town nestled high in the Himalayas, famous for its ancient temple dedicated to Lord Shiva. The temple is one of the twelve Jyotirlingas, sacred sites for Shiva worshippers,and part of the Char Dham pilgrimage circuit." },
  ];

  const handleButtonClick = (path, desc, headName, keyFeatures) => {
    console.log(keyFeatures);
    navigate("/model", { state: { path, desc, headName, keyFeatures } });
  };

  return (
    <div>
      <div className='md:px-20 md:mx-20 mx-5 grid grid-cols-3 gap-4 shadow-lg py-5 justify-center items-center home-models'>
        {modelDetails.map((item, index) => (
          isSmallScreen ? (
            <div key={index} className='model-grid-item flex justify-center w-full relative'>
              <div className='flex justify-center'>
                <img src={item.logo} alt="" name={item.name} className="md:w-[80%] w-full" />
                <p onClick={() => handleButtonClick(item.name, item.description, item.headName, item.keyFeatures)} className='model-text text-center cursor-pointer md:text-sm text-[8px] font-bold capitalize text-white bg-[#0000006e] absolute bottom-0 flex items-center gap-2 justify-around'>
                  {item.headName}
                  <FaArrowRight className='text-[]'/>
                </p>
              </div>
            </div>
          ) : (
            // <Atropos
            //   key={index}
            //   activeOffset={20}
            //   shadowScale={.05}
            //   className="my-atropos">
              <div className='model-grid-item md:w-[80%] flex justify-center w-full relative'>
                <div className='flex justify-center cursor-pointer' onClick={() => handleButtonClick(item.name, item.description, item.headName, item.keyFeatures)}>
                  <img src={item.logo} alt="" name={item.name} className="  w-full" />
                  <p  className='model-text text-center  md:text-sm text-[8px] font-bold capitalize text-white bg-[#0000006e]  absolute bottom-0 flex items-center gap-2 justify-around'>
                    {item.headName}
                    <FaArrowRight className='text-[]'/>
                  </p>
                </div>
              </div>
            // </Atropos>
          )
        ))}
      </div>
    </div>
  );
}
