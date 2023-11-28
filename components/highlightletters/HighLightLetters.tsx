"use client"

import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import style from "@/sass/highlightletters/HighLigthLetters.module.scss"

const Letter = ({letter,hilight}:{
    letter:string,
    hilight:boolean
}) => {
    return(
    <span
    className={hilight?`${style.span} ${style.span_on}`:`${style.span} ${style.span_off}`}
    >{letter}
    </span>
    )
}

const Line = ({line}:{
    line:string,
}) => {

    const [hilight,setHilight] = useState<boolean>(false)

    return (
        <span
        onMouseEnter={()=>{setHilight(true)}}
        onMouseLeave={()=>{setHilight(false)}}
        >
        {line.split("").map(letter=>(<Letter letter={letter} hilight={hilight}/>))}
        </span>
    )
}


const Component = ({text}:{
    text:string
}) => {

    const [hilight,setHilight] = useState<boolean>(false)

    return (
    <>
    {text.split(".").map(line=>(<Line line={line+"."}/>))}
    </>
    );
}
 
export default Component;
