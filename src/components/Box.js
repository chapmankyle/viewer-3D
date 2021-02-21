import { useRef, useState } from 'react';

/**
 * Renders a box using the properties given.
 * @param {any} props The properties to use for the box rendering.
 */
function Box(props) {
  // use mesh by reference
  const mesh = useRef();

  // keep track of states
  const [hovered, setHover] = useState(false);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  let mouseDown = props.mouseDown ? props.mouseDown : false;

  // position of the box
  const position = props.position ? props.position : [1, 1, 1];

  /**
   * Rotates the mesh.
   * @param {any} event The event that has been triggered.
   */
  const rotate = (event) => {
    // mouse is not pressed
    if (!mouseDown) {
      return;
    }

    // calculate mouse position change
    const deltaX = event.clientX - mouseX;
    const deltaY = event.clientY - mouseY;

    setMouseX(event.clientX);
    setMouseY(event.clientY);

    // rotate mesh
    mesh.current.rotation.x += deltaY / 100;
    mesh.current.rotation.y += deltaX / 100;
  };

  /**
   * Updates the position of the mouse and rotates the box.
   * @param {any} event The event that has been triggered.
   */
  const updatePosition = (event) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
    rotate(event);
  };

  return (
    <mesh
      ref={ mesh }
      scale={ [1, 1, 1] }
      position={ position }
      onPointerOver={ e => setHover(true) }
      onPointerOut={ e => setHover(false) }
      onPointerMove={ updatePosition }
    >
      <boxBufferGeometry args={ [1.5, 1.5, 1.5] } />
      <meshStandardMaterial color={ hovered ? 'hotpink' : 'orange' } />
    </mesh>
  );
}

export default Box;
