import React, { useState } from "react";


const Question=({props})=>{
    const [text, setText]= useState(false);
    
    return(
        <section>
            <div className={text ? "open" : "closed"}>
                <h3>{props.ques}</h3>

                <button onClick={()=>
                     setText(!text)} > {text ? 'close' : 'open'}    
                </button> 
                  
            </div>
            {text && <p>{props.info}
                <input type="text" placeholder="enter your data"></input>
                <button type="submit" >submit</button>
                 </p>}
        </section>
        
    );
}

export default Question;