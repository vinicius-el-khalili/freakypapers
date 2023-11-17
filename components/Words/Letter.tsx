import { Dispatch,SetStateAction } from "react"
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

const Letter = ({states,letter,charKey}:{

    states:{
        [key:number]:{
            value:1|2|3,
            set: Dispatch<SetStateAction<1|2|3>>
        }
    }
    letter:"A"|"B"|"C"|"D"|"E"|"F"|"G"|"H"|"I"|"J"|"K"|"L"|"M"|"N"|"O"|"P"|"Q"|"R"|"S"|"T"|"U"|"V"|"X"|"Y"|"Z",
    charKey:number

}) => {
    
    const charMap = {

        "A":<A index={states[charKey].value}/>,
        "B":<B index={states[charKey].value}/>,
        "C":<C index={states[charKey].value}/>,
        "D":<D index={states[charKey].value}/>,
        "E":<E index={states[charKey].value}/>,
        "F":<F index={states[charKey].value}/>,
        "G":<G index={states[charKey].value}/>,
        "H":<H index={states[charKey].value}/>,
        "I":<I index={states[charKey].value}/>,
        "J":<J index={states[charKey].value}/>,
        "K":<K index={states[charKey].value}/>,
        "L":<L index={states[charKey].value}/>,
        "M":<M index={states[charKey].value}/>,
        "N":<N index={states[charKey].value}/>,
        "O":<O index={states[charKey].value}/>,
        "P":<P index={states[charKey].value}/>,
        "Q":<Q index={states[charKey].value}/>,
        "R":<R index={states[charKey].value}/>,
        "S":<S index={states[charKey].value}/>,
        "T":<T index={states[charKey].value}/>,
        "U":<U index={states[charKey].value}/>,
        "V":<V index={states[charKey].value}/>,
        "W":<W index={states[charKey].value}/>,
        "Y":<Y index={states[charKey].value}/>,
        "X":<X index={states[charKey].value}/>,
        "Z":<Z index={states[charKey].value}/>,

    }

    return (
        <>
        {charMap[letter]}
        </>
    );
}
 
export default Letter;