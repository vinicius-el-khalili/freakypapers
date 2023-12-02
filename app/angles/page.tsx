import angel from "@/public/angel01-removebg.png"
import Image from "next/image";
import style from "./Angles.module.scss"

const Angles = () => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <div className={style.mask}/>
                <Image className={style.Image} src={angel} alt="" fill style={{objectFit:"contain"}} />
            </div>
            <div className={style.header}>
                <h1>Peidei</h1>
            </div>
        </div>
    );
}
 
export default Angles;