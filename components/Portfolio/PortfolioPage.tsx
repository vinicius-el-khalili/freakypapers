import Hero from "./Hero/Hero";
import style from "./PortfolioPage.module.scss"
const PortfolioPage = () => {
    return (
        <>
        <div className={style.PortfolioPage}>
            <Hero/>
        </div>
        <div className={style.PerlinNoise}/>

        </>
    );
}
 
export default PortfolioPage;