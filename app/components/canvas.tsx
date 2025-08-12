'use client'
import { Application, extend } from '@pixi/react'
import { Text } from 'pixi.js'
import { useState, useEffect} from 'react'

extend({ Text})

    

const Canvas = () => {

    const [textArr, setTextArr] = useState([])



useEffect(() => {
    const handleKeyDown = (event) => {

              setTextArr((prev) => [...prev, event.key]);

      console.log("Key pressed:", event.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);    
    

  return (
    <div>
      hello
      <Application width={800} height={600} backgroundColor={0x000000}>
        <pixiText
          text={textArr.join('')}
          x={0}
          y={0}
          style={{
            fill: '#ffffff',
            fontSize: 36,
            fontFamily: 'Arial'
          }}
        />
      </Application>
=======
const Canvas = () => {
  return (
    <div> 

    hello
    hello
>>>>>>> 147e357 (first commit)
    </div>
  )
}

export default Canvas
<<<<<<< HEAD

=======
>>>>>>> 147e357 (first commit)
