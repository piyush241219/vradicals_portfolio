import React from 'react';
import './App.css';
import 'atropos/css';
import Home from './components/three/Home';
import { Route, Routes } from 'react-router-dom';
import Canvas3d from './components/three/Canvas3d';
import ModelDetails3d from './components/three/works/ModelDetails3d';
import Navbar from './components/three/Navbar';
import VRVideoDetails from './components/three/works/VRVideoDetails';

export default function App() {
  return (
    <div className=''>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/canvas3d' element={<Canvas3d />} />
        <Route path='/model' element={<ModelDetails3d />} />
        <Route path='/video-details' element={<VRVideoDetails />} />
      </Routes>
    </div>
  );
}
