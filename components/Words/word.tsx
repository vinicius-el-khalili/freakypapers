"use client"

import { useState, Dispatch, SetStateAction } from "react"
import Letter from "./Letter"

interface stateObjectsType {
    [key:number]:{
        value:1|2|3,
        set: Dispatch<SetStateAction<1|2|3>>
    }
}


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
    const states = generateStates(3)

    return (
        <>

        <button onClick={()=>{states[0].set(cycle(states[0].value))}}>A</button>
        <button onClick={()=>{states[1].set(cycle(states[1].value))}}>B</button>
        <button onClick={()=>{states[2].set(cycle(states[2].value))}}>C</button>

        <div
        style={{
            width:"100%",
            height:"100px",
            display:"grid",
            gridTemplateColumns:"repeat(12,1fr)",
            border:"1px solid white"
        }}
        >
            <Letter states={states} letter="A" charKey={0}/>
            <Letter states={states} letter="B" charKey={1}/>
            <Letter states={states} letter="C" charKey={2}/>
            
        </div>
        </>
    );
}
 
export default Word;