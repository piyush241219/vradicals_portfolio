import React, { useState } from 'react';
import charactorLogo from '../../assets/charactor.png';
import VRVideos from './works/VRVideos';

import Charactors from './works/Charactors';
import Models from './works/Models';

export default function Works() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentSelection = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className=' ' id='work'>
      <div className=''>
        <h1 className='text-center text-[#B366CF] py-10 text-5xl '>Our Works</h1>
        <div className='text-white flex justify-center gap-5 '>
          <p
            className={`text-white border hover:bg-gray-100 hover:text-black border-gray-100 rounded-md cursor-pointer p-2`}
            onClick={() => handleComponentSelection('VRVideos')}
            >
            VR Videos
          </p>
            
          <p
            className={`text-white border hover:bg-gray-100 hover:text-black border-gray-100 rounded-md cursor-pointer p-2`}
            onClick={() => handleComponentSelection('Models')}
          >
            3D Models
          </p>
          <p
            className={`text-white border hover:bg-gray-100 hover:text-black border-gray-100 rounded-md cursor-pointer p-2`}
            onClick={() => handleComponentSelection('Charactors')}
          >
            Charactors
          </p>
        </div>

        <div className='screen'>
          {selectedComponent === 'VRVideos' && <VRVideos />}
          {selectedComponent === 'Charactors' && <Charactors />}
          {selectedComponent === 'Models' && <Models />}
          {selectedComponent === null && <VRVideos />}
        </div>
      </div>
    </div>
  );
}
