"use client"

import { useState } from "react";
import A1 from "./A1";
import A2 from "./A2";
import A3 from "./A3";

const A = () => {
    const [index,setIndex] = useState<1|2|3>(1)
    return (
        <>

        {index==1&&<div style={{width:128,height:200,border:"1px solid white"}}><A1/></div>}
        {index==2&&<div style={{width:128,height:200,border:"1px solid white"}}><A2/></div>}
        {index==3&&<div style={{width:128,height:200,border:"1px solid white"}}><A3/></div>}
        
        <button style={{padding:"1rem"}} onClick={()=>{setIndex(1)}}>1</button>
        <button style={{padding:"1rem"}} onClick={()=>{setIndex(2)}}>2</button>
        <button style={{padding:"1rem"}} onClick={()=>{setIndex(3)}}>3</button>
        </>
    );
}
 
export default A;

