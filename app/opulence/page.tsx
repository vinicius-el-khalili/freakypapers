import style from "./Opulence.module.scss"

const Opulence = () => {
    return (
        <div className={style.container}>
            <Boxes/>
        </div>
    );
}
 
export default Opulence;

const Boxes = () => {
    return (
        <div className={style.boxesContainer}>
            <div className={style.diamond1}></div>
            <div className={style.diamond2}></div>
            <div className={style.diamond3}></div>
            <div className={style.diamond4}></div>
            <div className={style.diamond3}></div>
            <div className={style.diamond4}></div>
            <div className={style.diamond1}></div>
            <div className={style.diamond4}></div>
            <div className={style.diamond1}></div>
            <div className={style.diamond3}></div>
            <div className={style.diamond4}></div>
            <div className={style.textContainer}>
                <h1>Interesting</h1>
            </div>
        </div>
    );
}
 