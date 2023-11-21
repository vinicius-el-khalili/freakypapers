"use client"

import gsap from "gsap"
import style from "@/sass/Home.module.scss"
import { useLayoutEffect, useRef } from "react"
import Word from "../Words/word"

const Hero = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)
    const timelineRef = useRef<gsap.core.Timeline|null>(null)

    useLayoutEffect(()=>{
        const context = gsap.context(()=>{

            timelineRef.current = gsap.timeline()
            .fromTo(".heroH1",{opacity:0,x:"-25%"},{opacity:1,x:0})
            .fromTo(".separator",{opacity:0,width:0},{opacity:1,width:"50%"})
            .fromTo(".paragraph",{opacity:0,x:"25%"},{opacity:1,x:0})

        }, rootRef)
        return () => context.revert()
    },[])

    return (
        <div className={style.Home}>
          <div className={style.gridContainer}>

            <div className={`${style.hero} hero`} ref={rootRef} >
                <h1 className="heroH1">
                    <div>MAGAZINE</div>
                    <div>LETTERS</div>
                </h1>

                <div className={`${style.separator} separator`}/>
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>

            <div className={`${style.freakyLetters} freakyLetters`}>
                <Word word="abcdefg"/>
                <Word word="hijklmn"/>
                <Word word="opqrstu"/>
                <Word word="vxwyz"/>
            </div>

          </div>
        </div>

        
    );
}
 
export default Hero;