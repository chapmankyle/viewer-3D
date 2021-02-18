import './Viewer.css'

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import wood from './wood.jpg';

const Box = (props) => {
  // use mesh by reference
  const mesh = useRef();

  // keep track of states
  const [active, setActive] = useState(false);

  // on each frame update
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  // load texture with no dependencies
  const texture = useMemo(() => new THREE.TextureLoader().load(wood), []);

  return (
    <Box />
  );
}

function Viewer() {
  return (
    <div>
      <h1>Viewer goes here.</h1>
    </div>
  );
}

export default Viewer;
