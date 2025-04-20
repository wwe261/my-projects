import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

const MediaLibraryExample = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  // Ask for permission on mount
  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Media Library access is needed');
        setHasPermission(false);
        return;
      }
      setHasPermission(true);

      //const fetchedAlbums = await MediaLibrary.getAlbumsAsync();
      //const photoAlbums = albums.filter((album) => {
      //  return album.assetCount > 0 && album.mediaType === MediaLibrary.MediaType.photo;
     // });
     const albums = await MediaLibrary.getAlbumsAsync();
     const assets = await MediaLibrary.getAssetsAsync({
        albums: albums.id,
        mediaType: MediaLibrary.MediaType.photo, // Filter to only photos
        first: 50, // Fetch the first 50 assets (you can change this as needed)
      });
      setAlbums(photoAlbums);
      console.log(assets)
    })();
  }, []);

  // Load photos from the selected album
  const loadPhotosFromAlbum = async (album) => {
    setSelectedAlbum(album);
    const assetData = await MediaLibrary.getAssetsAsync({
      album: album[0],
      mediaType: MediaLibrary.MediaType.photo ,
      first: 20, // you can paginate or increase this
      sortBy: [['creationTime', false]],
    });
    setPhotos(assetData.assets);
  };

  if (hasPermission === false) {
    return <Text>No access to media library.</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Albums:</Text>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => loadPhotosFromAlbum(item)}
            style={{
              backgroundColor: selectedAlbum?.id === item.id ? '#2196f3' : '#eee',
              padding: 10,
              marginRight: 10,
              borderRadius: 10,
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        style={{ marginVertical: 10 }}
      />

      {selectedAlbum && <Text>Showing photos from: {selectedAlbum.title}</Text>}

      <FlatList
        data={photos}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            style={{ width: 100, height: 100, margin: 5, borderRadius: 10 }}
          />
        )}
      />
    </View>
  );
};

export default MediaLibraryExample;
  