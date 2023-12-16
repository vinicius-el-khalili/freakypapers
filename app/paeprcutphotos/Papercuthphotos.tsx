"use client"

import { useState } from "react";
import style from "./Papercuthphotos.module.scss"
import Image from "next/image";

const Papercuthphotos = () => {
    const [menu,setMenu] = useState<boolean>(false)
    return (
    <div className={style.Papercuthphotos}>
        
        <div className={style.imgContainer}>
            <Image src={"/joris_teatro.jpg"} alt="ducks" fill style={{objectFit:"contain"}}/>
        </div>

        <div className={menu?`${style.glasses} ${style.menuON}`:style.glasses}>

            <div className={style.glass1}></div>
            <div className={style.glass2}></div>
            <div className={style.glass3}></div>

        </div>

        <div className={style.buttonsContainer}>
            <button onClick={()=>setMenu(!menu)}>Menu {`${menu?"on":"off"}`}</button>
        </div>

    </div>
    );
}
 
export default Papercuthphotos;