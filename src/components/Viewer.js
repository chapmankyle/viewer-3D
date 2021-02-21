import { useState } from 'react';
import { Canvas } from 'react-three-fiber';

import Box from './Box'

/**
 * Returns the component used to view the 3D objects.
 */
function Viewer() {
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <Canvas
      onPointerDown={ e => setMouseDown(true) }
      onPointerUp={ e => setMouseDown(false) }
    >
      <ambientLight intensity={ 0.5 } />
      <spotLight position={ [10, 10, 10] } angle={ 0.15 } penumbra={ 1 } />
      <pointLight position={ [-10, -10, -10] } />

      <Box position={ [0, 0, 0] } mouseDown={ mouseDown } />
    </Canvas>
  );
}

export default Viewer;
