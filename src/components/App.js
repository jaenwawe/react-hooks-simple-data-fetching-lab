// create your App component here

import React from "react";
import { useState } from "react"; //change item for every child
import { useEffect } from "react"; 
import FoxImage from "./FoxImage"







function App(){
    const [votes, setVotes] = useState(0);//set state to 0
    const [showClock, setShowClock] = useState(true)
   

    // useEffect(()=>
    //     {(console.log("useEffect!!!"))}, //why do I close element here
    //     []//indicates how many times will this will render 
    //       //empty
    // 
    function Clock() {
        const [time, setTime] = useState(new Date());
      
        useEffect(() => {
          
          const id = setInterval(
              () => { setTime(new Date());}
              , 1000);
   
              return function() {
                  console.log("cleanup");
                  clearInterval(id);
              }

        },    //why do I close element here
        []); //indicates how many times will this will render 
          //empty =1
          return(<div>{time.toString()}</div>);

    }


    
console.log("stateEffect represents!");
    
    return(
        <div>  
                 <h1>Memorial day</h1>
                 {showClock? <Clock/> : null}

                <button onClick={()=> setShowClock(false)}> {showClock? <Clock/> : "Clock Hidden"} </button>
  
   
            <button onClick={()=>setVotes(votes+1)}> {votes} </button>
            <FoxImage/>        
            {/* <form>
            <input type="text" placeholder="This is an input with text type a placeholder"></input>

            </form> */}
        </div>    
    )
}    


export default App;








