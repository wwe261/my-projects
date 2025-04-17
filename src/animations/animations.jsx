import { useState, useEffect } from "react";

const animations=()=>{
    //HEADER TEXT ANIMATION
  const fullText = "JD BOOKSTORE";
  const [displayedText, setDisplayedText] = useState("");

  const headerTextAnimation=()=>{

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 200); 

      return () => clearTimeout(timeout);
    }
  }, [index]);

  }
  
  return{headerTextAnimation, displayedText}
}

export default animations


