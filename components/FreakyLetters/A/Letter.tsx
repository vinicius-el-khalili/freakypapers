"use client"

import { useState } from "react";
import A1 from "./_1";
import A2 from "./_2";
import A3 from "./_3";

const Letter = ({index}:{
    index:1|2|3
}) => {
    return (
        <>

        {index==1&&<A1/>}
        {index==2&&<A2/>}
        {index==3&&<A3/>}

        </>
    );
}
 
export default Letter;

