"use client"

import { useState } from "react";
import B1 from "./_1";
import B2 from "./_2";
import B3 from "./_3";

const Letter = ({index}:{
    index:1|2|3
}) => {

    return (
        <>

        {index==1&&<div style={{width:128,height:200,border:"1px solid white"}}><B1/></div>}
        {index==2&&<div style={{width:128,height:200,border:"1px solid white"}}><B2/></div>}
        {index==3&&<div style={{width:128,height:200,border:"1px solid white"}}><B3/></div>}
        
        </>
    );
}
 
export default Letter;

