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
            .fromTo(".paragraph",{opacity:0,x:"25%"},{opacity:1,x:0, duration:1})
            .fromTo(".freakyLetters1",{opacity:0,x:"25%"},{opacity:1,x:0})
            .fromTo(".freakyLetters2",{opacity:0,x:"25%"},{opacity:1,x:0})
            .fromTo(".freakyLetters3",{opacity:0,x:"25%"},{opacity:1,x:0})

        }, rootRef)
        return () => context.revert()
    },[])

    return (
        <div className={style.Home} ref={rootRef}>
          <div className={style.gridContainer}>

            <div className={`${style.hero} hero`}>
                <h1 className="heroH1">
                    <div>freaky</div>
                    <div>letters</div>
                </h1>

                <div className={`${style.separator} separator`}/>
                <p className="paragraph">
                    a proof of concept implementation of something
                </p>
            </div>

            <div className={`${style.freakyLetters} freakyLetters`}>
                <div className="freakyLetters1"><Word word="abcdefgh"/></div>
                <div className="freakyLetters2"><Word word="ijklmnopq"/></div>
                <div className="freakyLetters3"><Word word="rstuvwyzx"/></div>
            </div>

          </div>
        </div>

        
    );
}
 
export default Hero;