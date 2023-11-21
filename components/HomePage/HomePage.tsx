"use client"
import Word from "@/components/Words/word"
import style from "@/sass/Home.module.scss"
import Hero from "./Hero";
import TheText from "./TheText";

export default function HomePage() {
    
    return (
    <div className={style.Home}>
      <div className={style.gridContainer}>
        <Hero/>
        <TheText/>
      </div>
    </div>

  )
}