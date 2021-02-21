import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

/**
 * Rotates a mesh using mouse movement.
 * @param {any} event The event triggered.
 * @param {any} mesh The mesh to rotate.
 * @param {boolean} mouseDown `true` if the mouse has been clicked, `false` otherwise.
 * @param {number} mouseX The x position of the mouse.
 * @param {number} mouseY The y position of the mouse.
 */
function rotate(event, mesh, mouseDown, mouseX, mouseY) {
  // mouse is not pressed
  if (!mouseDown) {
    return;
  }

  // calculate mouse position change
  const deltaX = event.clientX - mouseX;
  const deltaY = event.clientY - mouseY;

  mouseX = event.clientX;
  mouseY = event.clientY;

  // rotate mesh
  mesh.current.rotation.x += deltaY / 100;
  mesh.current.rotation.y += deltaX / 100;
}

/**
 * Renders a box using the properties given.
 * @param {any} props The properties to use for the box rendering.
 */
const Box = (props) => {
  // use mesh by reference
  const mesh = useRef();

  // keep track of states
  const [hovered, setHover] = useState(false);

  const [mouseDown, setMouseDown] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  return (
    <mesh
      { ...props }
      ref={ mesh }
      scale={ [1, 1, 1] }
      onPointerOver={ e => setHover(true) }
      onPointerOut={ e => setHover(false) }
      onPointerMove={ e => { setMouseX(e.clientX); setMouseY(e.clientY); rotate(e, mesh, mouseDown, mouseX, mouseY); } }
      onPointerDown={ e => setMouseDown(true) }
      onPointerUp={ e => setMouseDown(false) }
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
      <Box position={ [0, 0, 0] } />
    </Canvas>
  );
}

export default Viewer;
