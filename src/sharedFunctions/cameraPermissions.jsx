 import * as ImagePicker from 'expo-image-picker'
 import * as FileSystem from 'expo-file-system'
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
                const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
                    encoding: FileSystem.EncodingType.Base64,
                  });
                setImage(base64)
            }
        }catch(error){
            console.log(error)
        }
    }

    const takePhoto=async()=>{
        try{
            const result=await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                apect:[4, 3],
                quality:1
            })

            if(!result.canceled){
                const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
                    encoding: FileSystem.EncodingType.Base64,
                  });
                setImage(base64)
            }
        }catch(err){
            console.log(err)
        }
    }


    return {pickImageF,image, takePhoto}
}  

 
   