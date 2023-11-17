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

        {index==1&&<B1/>}
        {index==2&&<B2/>}
        {index==3&&<B3/>}
        
        </>
    );
}
 
export default Letter;

