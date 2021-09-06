   import { useEffect, useState } from "react";
 
   const API_URL = "https://randomfox.ca/floof/";


   function FoxImage(){
    
    const[image, setImage] = useState(null);
  
    useEffect(()=> {
          fetch(API_URL) 
          .then(j=>j.json())
          .then(imageArray => setImage(imageArray.image))
      }, [])
  
  return(
      <div>
          <img src={image} alt= "random fox"/>
  
      </div>
      ) 
  }

  export default FoxImage