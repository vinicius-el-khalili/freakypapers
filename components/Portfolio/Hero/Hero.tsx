"use client"
import style from "./Hero.module.scss"
const Hero = () => {
    return (
        <div className={style.Hero}>
            <div className={style.Image}>
                <h1>Vinicius</h1>
                <p>../webDev</p>
            </div>
            <div className={style.navBar}>
                <div className={style.navButton}>Sobre</div>
                <div className={style.navButton}>Tecnologias</div>
                <div className={style.navButton}>Projetos</div>
                <div className={style.navButton}>Contato</div>
            </div>
            <div className={style.name}>
            </div>
        </div>
    );
}
 
export default Hero;