"use client"

import { useState, Dispatch, SetStateAction } from "react"
import Letter from "./Letter"

interface stateObjectsType {
    [key:number]:{
        value:1|2|3,
        set: Dispatch<SetStateAction<1|2|3>>
    }
}

type letterTpye = "A"|"B"|"C"|"D"|"E"|"F"|"G"|"H"|"I"|"J"|"K"|"L"|"M"|"N"|"O"|"P"|"Q"|"R"|"S"|"T"|"U"|"V"|"X"|"Y"|"Z"

const Word = ({word}:{

    word:string

}) => {

    const cycle = (x:1|2|3) => {
        switch (x){
            case 1:
                return 2
            case 2:
                return 3
            case 3:
                return 1
        }
    }

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

    return (
        <>

        <div style={{
            margin:"1rem"
        }}>

        {word.toUpperCase().split("").map((char,index)=>(
            <button 
            onClick={()=>{
                states[index].set(cycle(states[index].value))
            }}
            style={{
                border:"none",
                padding:10,
                marginRight:10
            }}
            >
                {char}
            </button>
        ))}

        </div>

        <div
        style={{
            width:"100%",
            height:"100px",
            display:"grid",
            gridTemplateColumns:"repeat(9,1fr)",
        }}
        >
            {word.toUpperCase().split("").map((char,index)=>(
                //@ts-ignore
                <Letter states={states} letter={char} charKey={index} />
            ))}
        </div>
        </>
    );
}
 
export default Word;