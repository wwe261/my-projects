 import * as ImagePicker from 'expo-image-picker'

import { useState } from 'react'

import { useEffect } from 'react'

export const cameraPermissions=()=>{
    const [image,setImage]=useState()

    useEffect(()=>{
        (async()=>{
            //Permission for accessing media library
            const mediaLibraryStatus=await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(mediaLibraryStatus.status !== 'granted'){
                Alert.alert('Permission Required', 'Sorry we need permission to access your media library, since you denied allow access in settings')
            }

            //Permission for accessing camera
            const cameraStatus=await ImagePicker.requestCameraPermissionsAsync();
            if(cameraStatus.status !== 'granted'){
                Alert.alert('Permission Required', 'Sorry we need permission to access your media library, since you denied allow access in settings') 
            }

        }) ();
    }, [])

    const pickImageF=async()=>{
        try{
            const result=await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[4, 3],
                quality:1 })

            if(!result.canceled){
                setImage(result.assets[0].uri)
            }
        }catch(error){
            console.log(error)
        }
    }


    return {pickImageF,image}
}  

 
   