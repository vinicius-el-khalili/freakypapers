"use client"

import { useState } from "react";
import B1 from "./B1";
import B2 from "./B2";
import B3 from "./B3";

const B = () => {
    const [index,setIndex] = useState<1|2|3>(1)
    return (
        <>

        {index==1&&<div style={{width:128,height:200,border:"1px solid white"}}><B1/></div>}
        {index==2&&<div style={{width:128,height:200,border:"1px solid white"}}><B2/></div>}
        {index==3&&<div style={{width:128,height:200,border:"1px solid white"}}><B3/></div>}
        
        <button style={{padding:"1rem"}} onClick={()=>{setIndex(1)}}>1</button>
        <button style={{padding:"1rem"}} onClick={()=>{setIndex(2)}}>2</button>
        <button style={{padding:"1rem"}} onClick={()=>{setIndex(3)}}>3</button>
        </>
    );
}
 
export default B;

