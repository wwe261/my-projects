import { View, Text,TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { setValue } from '@/src/redux/openPickImageSlicer'
import {cameraPermissions} from '../../sharedFunctions/cameraPermissions'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useEffect } from 'react'
import { setUri } from '@/src/redux/ImageUri'
import { setUpdateUri } from '@/src/redux/updateImageUri'
import pickImage from '../../../styles/admin/pickImageModal'

const PickImageModal = () => {
    const dispatch=useDispatch()
    const {pickImageF, image, takePhoto}=cameraPermissions()
    
   

    useEffect(()=>{
        dispatch(setUri(image))
        dispatch(setUpdateUri(image))
    },[image])
    
  return (<>
    <BottomSheetView style={pickImage.container}>
        <Text style={pickImage.containerText}>Pick Image</Text>

        <View style={pickImage.wrapper}>

            <TouchableOpacity style={pickImage.button} onPress={pickImageF}>
                <Text style={pickImage.imageText}>Upload from gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={pickImage.button} onPress={takePhoto} >
                <Text style={pickImage.imageText}>Take a photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={pickImage.button} onPress={()=> dispatch(setValue(false))}>
                <Text style={pickImage.imageText}>Cancel</Text>
            </TouchableOpacity>
            
        </View>
    </BottomSheetView>
  
  
  
  </>)
}

export default PickImageModal