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

        {index==1&&<Letter1/>}
        {index==2&&<Letter2/>}
        {index==3&&<Letter3/>}
        
        </>
    );
}
 
export default Letter;

