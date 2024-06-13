import Hero from "./Hero/Hero";
import style from "./PortfolioPage.module.scss"
const PortfolioPage = () => {
    return (
        <>
        <div className={style.PortfolioPage}>
            <Hero/>
        </div>
        <div className={style.PerlinNoise}/>
        <section id="mysection"
        style={{
            width:"100vw",
            height:"100vh"
        }}
        >
            Mysection
        </section>
        <section id="mysection2"
        style={{
            width:"100vw",
            height:"100vh",
            backgroundColor:"#222"
        }}
        >
            Mysection2
        </section>
        </>
    );
}
 
export default PortfolioPage;