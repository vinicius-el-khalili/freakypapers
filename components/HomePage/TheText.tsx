"use client"

import gsap from "gsap";
import style from "@/sass/Home.module.scss"
import Word from "@/components/Words/word"


const TheText = () => {
    return (
        <div className={style.freakyLetters}>
          <Word word="The quick"/>
          <Word word="brown fox"/>
          <Word word="jumps over"/>
          <Word word="a lazy dog"/>
        </div>
    );
}
 
export default TheText;