"use client"

import { CSSProperties, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ScrollTriggerPage = () => {

    const rootRef = useRef<HTMLDivElement|null>(null)
    const timelineRef = useRef<gsap.core.Timeline|null>(null)
    const [key,setKey] = useState(0)

    useLayoutEffect(()=>{
        const context = gsap.context(()=>{
            let timeline = gsap.timeline()
            timeline.from(".c", {
                scrollTrigger: {
                    trigger: ".c",
                    start: "top top",
                    scrub: true,
                    pin: true
                },
                x: 100,
                opacity: 0.5,
                duration: 2,
                delay: 2,
            });

            gsap.to(".a",{
                rotation:360
            })

        }, rootRef)
        return () => context.revert()
    },[key])

    return (
        <>
        <div style={rootStyle} ref={rootRef} key={key}>
            <button style={buttonStyle} onClick={()=>{setKey(prevKey=>prevKey+1)}}>Rerender</button>
            <div className="a" style={boxStyle("darkgreen")}>a</div>
            <div className="b" style={boxStyle("darkorange")}>b</div>
            <div className="c" style={boxStyle("darkblue")}>c</div>
        </div>
        </>
    );
}
 
export default ScrollTriggerPage;

const boxStyle = (color:string) => {
    let _css: CSSProperties = {
        width: 50,
        height: 50,
        backgroundColor: color,
        fontSize: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    return _css
}

const buttonStyle:CSSProperties = {
    padding:"1rem",
    width:"fit-content",
    position:"fixed",
    marginLeft:"6rem"
}

const rootStyle: CSSProperties = {
    display:"flex",
    flexDirection:"column",
    gap:"50vh",
    backgroundColor:"#252525",
    height:"150vh"
}