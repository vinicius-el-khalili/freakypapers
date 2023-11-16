"use client"

import A1 from "./A1";
import A2 from "./A2";

const A = () => {
    return (
        <div style={{display:"flex"}}>

        
        <div style={{width:100,height:200,border:"1px solid white"}}><A1/></div>
        <div style={{width:100,height:200,border:"1px solid white"}}><A2/></div>
        
        </div>
    );
}
 
export default A;

