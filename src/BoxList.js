import React, { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
   return (<div>
    <NewBoxForm />
    <Box />
   </div> 
   )
}

export default BoxList