"use client"
import Word from "@/components/Words/word"
import style from "@/sass/Home.module.scss"
import gsap from "gsap";
import Hero from "./Hero";

export default function HomePage() {
    
    return (
    <div className={style.Home}>
      <div className={style.gridContainer}>
        
      <Hero/>
    
      <div className={style.freakyLetters}>
          <Word word="The quick"/>
          <Word word="brown fox"/>
          <Word word="jumps over"/>
          <Word word="a lazy dog"/>
      </div>
    
      </div>
    </div>

  )
}