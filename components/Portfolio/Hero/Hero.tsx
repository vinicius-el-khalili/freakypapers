"use client"
import style from "./Hero.module.scss"
const Hero = () => {
    return (
        <div className={style.Hero}>
            <div className={style.Image}>
                
            </div>
            <div className={style.navBar}>
                <div className={style.navButton}>About</div>
                <div className={style.navButton}>Services</div>
                <div className={style.navButton}>Work</div>
                <div className={style.navButton}>Contact</div>
            </div>
            <div className={style.name}>
                <h1>VINICIUS</h1>
            </div>
        </div>
    );
}
 
export default Hero;