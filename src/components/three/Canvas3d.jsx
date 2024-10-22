import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import CanvasLoader from "./Loader";

const RotatingControls = ({ autoRotateSpeed, setRotationComplete }) => {
  const controlsRef = useRef();
  const rotationRef = useRef(0);

  useFrame((state, delta) => {
    if (controlsRef.current) {
      rotationRef.current += (delta * autoRotateSpeed * Math.PI) / 35;
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = autoRotateSpeed;

      if (rotationRef.current >= 2 * Math.PI) {
        controlsRef.current.autoRotate = false;
        setRotationComplete(true);
      }
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotate={true}
      autoRotateSpeed={autoRotateSpeed}
      enableZoom={true}
      maxPolarAngle={Math.PI}
      minPolarAngle={0}
    />
  );
};

const Computers = ({ path, isMobile }) => {
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, scene);
  const { camera } = useThree();

  useEffect(() => {
    // Calculate the bounding box of the model
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    // Center the model
    scene.position.sub(center);

    // Adjust camera to fit the model
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
    if (isMobile) {
      cameraZ *= 1.2; // Adjust for mobile view
    }

    camera.position.set(0, 0, cameraZ * 1.3);
    // camera.position.set(0, 2, 5); // Adjust camera position
    // camera.rotation.set(-0.5, 0, 0); // Adjust camera rotation

    camera.lookAt(0, 0, 0);

    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play();
      });
    }

    return () => {
      if (actions) {
        Object.values(actions).forEach((action) => {
          action.stop();
        });
      }
    };
  }, [scene, actions, camera, isMobile]);

  return (
    <mesh receiveShadow>
      <hemisphereLight
        intensity={5.15}
        groundColor="black"
        position={[-20, 50, 10]} // Adjust hemisphere light position
        // castShadow
      />

      <pointLight
        intensity={1}
        groundColor="black"
        position={[-20, 5, 10]} // Adjust point light position
        castShadow
      />
      {/* <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive object={scene} />
    </mesh>
  );
};

const Canvas3D = (props) => {
  const location = useLocation();
  const path = location.state?.path || props.path || "./VR3.glb";

  const [isMobile, setIsMobile] = useState(false);
  const [rotationComplete, setRotationComplete] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="w-full !flex   !justify-center  !items-center  ">
      <Canvas
        className="md:w-[50vw] model-inner !h-[25rem] !md:h-[30rem] md:object-contain object-cover   "
        frameloop="demand"
        shadows
        camera={{ position: [0, 0.5, 0.5], fov: 5 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />} >
          <RotatingControls 
            autoRotateSpeed={25}
            setRotationComplete={setRotationComplete}
          />
          <Computers path={path} isMobile={isMobile}  />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Canvas3D;
