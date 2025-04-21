
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const Images=()=> {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    // Request permissions for Camera and Media Library
    const requestPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();

      setHasCameraPermission(cameraPermission.granted);
      setHasMediaLibraryPermission(mediaLibraryPermission.granted);
    };

    requestPermissions();
  }, []);

  // Function to pick an image from the gallery
  const pickImage = async () => {
    if (hasMediaLibraryPermission) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.uri);
      }
    } else {
      alert('Permission to access media library is required.');
    }
  };

  // Function to take a photo with the camera
  const takePhoto = async () => {
    if (hasCameraPermission && camera) {
      const photo = await camera.takePictureAsync();
      setImageUri(photo.uri);
    } else {
      alert('Camera permission is required.');
    }
  };

  if (hasCameraPermission === null || hasMediaLibraryPermission === null) {
    return <Text>Requesting permissions...</Text>;
  }

  if (hasCameraPermission === false || hasMediaLibraryPermission === false) {
    return <Text>No access to camera or media library</Text>;
  }

  if (imageUri) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Button title="Take another photo" onPress={() => setImageUri(null)} />
        <Button title="Pick from gallery" onPress={pickImage} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {hasCameraPermission ? (
        <Camera style={styles.camera} ref={(ref) => setCamera(ref)}>
          <Button title="Take a photo" onPress={takePhoto} />
        </Camera>
      ) : (
        <Text>Camera permission is required to take a photo</Text>
      )}
      <Button title="Pick from gallery" onPress={pickImage} />
    </View>
  );
}


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  camera: {
    width: '100%',
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default Images; 

