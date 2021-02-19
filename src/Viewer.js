import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

/**
 * Renders a box using the properties given.
 * @param {any} props The properties to use for the box rendering.
 */
const Box = (props) => {
  // use mesh by reference
  const mesh = useRef();

  // keep track of states
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // on each frame update
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh
      { ...props }
      ref={ mesh }
      scale={ active ? [1.5, 1.5, 1.5] : [1, 1, 1] }
      onClick={ (e) => setActive(!active) }
      onPointerOver={ (e) => setHover(true) }
      onPointerOut={ (e) => setHover(false) }
    >
      <boxBufferGeometry args={ [1.5, 1.5, 1.5] } />
      <meshStandardMaterial color={ hovered ? 'hotpink' : 'orange' } />
    </mesh>
  );
}

/**
 * Returns the component used to view the 3D objects.
 */
function Viewer() {
  return (
    <Canvas>
      <ambientLight intensity={ 0.5 } />
      <spotLight position={ [10, 10, 10] } angle={ 0.15 } penumbra={ 1 } />
      <pointLight position={ [-10, -10, -10] } />
      <Box position={ [-1.2, 0, 0] } />
      <Box position={ [1.2, 0, 0] } />
    </Canvas>
  );
}

export default Viewer;
