"use client"

import { useState } from "react";
import Letter1 from "./_1";
import Letter2 from "./_2";
import Letter3 from "./_3";

const Letter = ({index}:{
    index:1|2|3
}) => {


    return (
        <>

        {index==1&&<div style={{width:128,height:200,border:"1px solid white"}}><Letter1/></div>}
        {index==2&&<div style={{width:128,height:200,border:"1px solid white"}}><Letter2/></div>}
        {index==3&&<div style={{width:128,height:200,border:"1px solid white"}}><Letter3/></div>}

        </>
    );
}
 
export default Letter;

