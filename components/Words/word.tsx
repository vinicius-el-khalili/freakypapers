"use client"

import A from "@/components/FreakyLetters/A/Letter"
import B from "@/components/FreakyLetters/B/Letter"
import C from "@/components/FreakyLetters/C/Letter"
import D from "@/components/FreakyLetters/D/Letter"
import E from "@/components/FreakyLetters/E/Letter"
import F from "@/components/FreakyLetters/F/Letter"
import G from "@/components/FreakyLetters/G/Letter"
import H from "@/components/FreakyLetters/H/Letter"
import I from "@/components/FreakyLetters/I/Letter"
import J from "@/components/FreakyLetters/J/Letter"
import K from "@/components/FreakyLetters/K/Letter"
import L from "@/components/FreakyLetters/L/Letter"
import M from "@/components/FreakyLetters/M/Letter"
import N from "@/components/FreakyLetters/N/Letter"
import O from "@/components/FreakyLetters/O/Letter"
import P from "@/components/FreakyLetters/P/Letter"
import Q from "@/components/FreakyLetters/Q/Letter"
import R from "@/components/FreakyLetters/R/Letter"
import S from "@/components/FreakyLetters/S/Letter"
import T from "@/components/FreakyLetters/T/Letter"
import U from "@/components/FreakyLetters/U/Letter"
import V from "@/components/FreakyLetters/V/Letter"
import W from "@/components/FreakyLetters/W/Letter"
import Y from "@/components/FreakyLetters/Y/Letter"
import X from "@/components/FreakyLetters/X/Letter"
import Z from "@/components/FreakyLetters/Z/Letter"
import { useState, Dispatch, SetStateAction } from "react"

interface stateObjectsType {
    [key:number]:{
        value:1|2|3,
        set: Dispatch<SetStateAction<1|2|3>>
    }
}


const Word = ({word}:{
    word:string
}) => {

    const generateStates = (N:number) => {
        let stateObjects:stateObjectsType = {}
        for (let i=0; i<N; i++){
            const [state,setState] = useState<1|2|3>(1)
            stateObjects[i] = {
                value: state,
                set: setState
            }
        }
        return stateObjects
    }

    const states = generateStates(word.length)
    console.log(states)
    console.log(states[0])

    const letterMap = {
        "A":A,
        "B":B
    }


    return (
        <>

        <button onClick={()=>{states[0].set(2)}}>0</button>

        <div
        style={{
            width:"100%",
            height:"100px",
            display:"grid",
            gridTemplateColumns:"repeat(12,1fr)",
            border:"1px solid white"
        }}
        >

            <S index={states[0].value}/>
            <U index={1}/>
            <C index={1}/>
            <H index={1}/>
            <S index={1}/>
            <U index={1}/>
            <C index={2}/>
            <H index={1}/>
            <N index={1}/>
            <E index={1}/>
            <S index={2}/>
            <S index={3}/>
            

        </div>
        </>
    );
}
 
export default Word;