import { Dimensions } from "react-native"
import { useState } from "react"

export const useContentSizeChange=()=>{

    const {height}=Dimensions.get('window')

     const [contentHeight,setContentHeight]=useState(0)
     const handleContentSizeChange=(contentWidth,contentHeight)=>{
        setContentHeight(contentHeight)
     }

     const scrollEnabled = contentHeight > height;

     return {scrollEnabled,handleContentSizeChange}

}

export const useContentWidthSizeChange=()=>{

   const {width}=Dimensions.get('window')

    const [contentWidth,setContentWidth]=useState(0)
    
    const handleContentWidthSizeChange=(contentWidth,contentHeight)=>{
       setContentWidth(contentWidth)
    }

    const scrollWidthEnabled = contentWidth > width;

    return {scrollWidthEnabled,handleContentWidthSizeChange}

}