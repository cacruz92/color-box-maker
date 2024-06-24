import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
   const INITIAL_STATE = [
      {id: uuid(), color: "Blue", height: "200px", width: "350px"}
   ]

   const [boxes, setBoxes] = useState(INITIAL_STATE);
   const addBox = (newBox) => {
      setBoxes(boxes => [...boxes, {...newBox, id:uuid()}])
   }
   const removeBox = (id) => {
      const updatedBoxes = boxes.filter(box => box.id !== id);
      setBoxes(updatedBoxes)
   }
   return (<div>
    <NewBoxForm addBox={addBox} />
    {boxes.map(({ id, color, height, width }) => (
    <Box id={id} 
    color={color} 
    height={height} 
    width={width} 
    key={id} 
    removeBox={removeBox}
    />))}
   </div> 
   )
}

export default BoxList