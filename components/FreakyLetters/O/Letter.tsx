"use client"

import { useState } from "react";
import Letter1 from "./_1";
import Letter2 from "./_2";
import Letter3 from "./_3";

const Letter = () => {
    const [index,setIndex] = useState<1|2|3>(1)
    return (
        <>

        {index==1&&<div style={{width:128,height:200,border:"1px solid white"}}><Letter1/></div>}
        {index==2&&<div style={{width:128,height:200,border:"1px solid white"}}><Letter2/></div>}
        {index==3&&<div style={{width:128,height:200,border:"1px solid white"}}><Letter3/></div>}
        
        <button style={{padding:"1rem"}} onClick={()=>{setIndex(1)}}>1</button>
        <button style={{padding:"1rem"}} onClick={()=>{setIndex(2)}}>2</button>
        <button style={{padding:"1rem"}} onClick={()=>{setIndex(3)}}>3</button>
        </>
    );
}
 
export default Letter;

