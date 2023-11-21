import Word from "@/components/Words/word"
import wallpaper from "@/public/wallpaper.jpg"

export default function Home() {
  return (

    <div style={{
      width:"100vw",
      height:"100vh",
      background:`url(${wallpaper.src})`,
      display: "flex",
      flexDirection:"column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Word word="The quick"/>
      <Word word="brown fox"/>
      <Word word="jumps over"/>
      <Word word="a lazy dog"/>
    </div>

  )
}
