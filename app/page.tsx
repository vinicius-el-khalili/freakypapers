import Word from "@/components/Words/word"
import wallpaper from "@/public/wallpaper.jpg"
import style from "@/sass/Home.module.scss"
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (

    <div
    className={style.Home}
    style={{background:`url(${wallpaper.src})`}}>

      <div className={style.gridContainer}>

        <div className={style.hero}>
          <h1>
            <div>MAGAZINE</div>
            <div>LETTERS</div>
          </h1>
          <div className={style.separator}/>
          <p>
            A case-study implementation of coordenated and rapidly changing images.
          </p>
        </div>

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
