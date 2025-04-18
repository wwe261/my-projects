import { useState, useEffect } from "react";

const useAnimations=()=>{
    //HEADER TEXT ANIMATION
  const fullText = "JD BOOKSTORE";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 200); 

      return () => clearTimeout(timeout);
    }
  }, [index, animate]);

  const headerTextAnimation=()=>{
    setDisplayedText("");
    setIndex(0);
    setAnimate(true); 
  }
  
  return{headerTextAnimation, displayedText}
}

export default useAnimations


