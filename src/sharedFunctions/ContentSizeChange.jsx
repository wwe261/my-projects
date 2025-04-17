import { Dimensions } from "react-native"
import { useState } from "react"

export const contentSizeChange=()=>{

    const {height}=Dimensions.get('window')

     const [contentHeight,setContentHeight]=useState(0)
     const handleContentSizeChange=(contentWidth,contentHeight)=>{
        setContentHeight(contentHeight)
     }

     const scrollEnabled = contentHeight > height;

     return {scrollEnabled,handleContentSizeChange}

}