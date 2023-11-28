import style from "@/sass/highlightletters/HighLigthLetters.module.scss"
import HilightLetters from "@/components/highlightletters/HighLightLetters";
import Image from "next/image";

const Page = () => {
    return (<div className={style.main}>
    
    <div>
        <h1>Geopoliticus Adult Watching the Death of the Old Man</h1>
        <h3>On the contemporary political situation(s) and their implications for the future</h3>
    </div>

    <div className={style.head}>
        <img
        src="/pills.png"
        />
        <div>
            <p>
                by 
            </p>
            <p>
               <u><a href="https://medium.com/@Pills.for.thoughts">Pills for thoughts</a></u>
            </p>
            <p>
                3 min read
            </p>            
        </div>
    </div>

    <img 
    className={style.image}
    src={"/salvador.webp"}
    style={{objectFit:"contain"}}
    alt=""/>



    <p>
    <HilightLetters
    text={`
    In his new book, “Principles for Dealing with the Changing World Order: Why Nations Succeed or Fail,” Ray Dalio discusses very interesting aspects about the rise and fall of empires during the last 500 years and the commonalities they all exhibit.
    `}
    />
    </p>

    <p>
    <HilightLetters
    text={`
    Dalio noticed a unique convergence of political and economic conditions a few years ago, conditions he hadn’t encountered before. These included enormous debts and zero to near-zero interest rates, leading to the massive printing of money in the world’s three major reserve currencies. Additionally, significant political and social conflicts arose within countries, especially the United States, driven by the largest wealth, political, and values disparities in over a century. Simultaneously, a rising global power, China, challenged the existing world order.
    `}
    />
    </p>
    <p>
    <HilightLetters
    text={`
    The last time such a confluence of factors occurred was between 1930 and 1945. This realisation prompted Dalio to search for recurring patterns and cause-and-effect relationships underlying major shifts in wealth and power over the last 500 years.
    `}
    />
    </p>
    <p>
    <HilightLetters
    text={`
    Current conflicts and potential military alliances, such as the Russo-Ukrainian and Israeli–Palestinian conflicts, combined with the economic and political crisis in the USA, may indicate early signs of a shift in the world order. Dalio has raised the possibility of China’s ascent, considering all the factors used in his analysis.
    `}
    />
    </p>

    </div>);
}
 
export default Page;