import { View, Text,TouchableOpacity, TextInput, KeyboardAvoidingView,Platform,
         ScrollView,TouchableWithoutFeedback,Keyboard , Image,
         Dimensions} from 'react-native'
import { useState, useEffect } from 'react';
import { useNavigation } from 'expo-router';

import Icon from 'react-native-vector-icons/FontAwesome5'

import homeStyles from '../../../styles/frontend/Homepage'

import useAnimations from '../../animations/animations'
import Searchcomponent from '../../sharedComponets/Searchcomponent'
import Footernavigation from '../../sharedComponets/Footernavigation'


import {useContentSizeChange, useContentWidthSizeChange} from '../../sharedFunctions/ContentSizeChange'
const Homepage = () => {
    const {scrollEnabled, handleContentSizeChange}=useContentSizeChange()
    const {scrollWidthEnabled,handleContentWidthSizeChange}=useContentWidthSizeChange()


    const {displayedText,headerTextAnimation}=useAnimations()
    useEffect(()=>{
        headerTextAnimation()
    }, [])
     
     const [keyboardVisible, setKeyboardVisible] = useState(false);
      useEffect(() => {
      const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
      const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

   return () => {
    showSub.remove();
    hideSub.remove();
   };
     }, []);
     const navigateToaddItemScreen=()=>{
        navigation.navigate("addItemToCartScreen")
     }

    const navigation=useNavigation()

  return (<>
 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
 <View style={homeStyles.Homepagecontainer} >

   <View style={{flex:1}}>
        {/* THIS IS THE HEADER OF OUR APP */}
     <View style={homeStyles.homePageHeader}>
        <Text style={homeStyles.homePageHeaderText}>{displayedText}</Text>
        <View style={homeStyles.homePageHeaderIconWrapper}>
            <Icon name="book-open" style={homeStyles.homePageHeaderIcon}/>
        </View>
     </View>

     <Searchcomponent/>
     

      <View style={homeStyles.categoryWrapper}>
        <Text style={homeStyles.categoryWrapperText}>SEARCH BY CATEGORY</Text>

      <ScrollView style={homeStyles.categoryButtonsWrapper}
                  horizontal 
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={scrollWidthEnabled}
                  onContentSizeChange={handleContentWidthSizeChange}
                  contentContainerStyle={{flexDirection:"row",paddingRight:"50%",gap:"2%", justifyContent:"flex-start",alignItems:"center"}}
      >

        <TouchableOpacity style={homeStyles.categoryButton}>
            <Text style={homeStyles.categoryButtonText}>Fiction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.categoryButton}>
            <Text style={homeStyles.categoryButtonText}>Fiction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.categoryButton}>
            <Text style={homeStyles.categoryButtonText}>Fiction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.categoryButton}>
            <Text style={homeStyles.categoryButtonText}>Fiction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.categoryButton}>
            <Text style={homeStyles.categoryButtonText}>Fiction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.categoryButton}>
            <Text style={homeStyles.categoryButtonText}>Fiction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.categoryButton}>
            <Text style={homeStyles.categoryButtonText}>Fiction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.categoryButton}>
            <Text style={homeStyles.categoryButtonText}>Fiction</Text>
        </TouchableOpacity>

        <TouchableOpacity style={homeStyles.categoryButton}>
            <Text style={homeStyles.categoryButtonText}>Fiction</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={homeStyles.categoryButton}>
            <Text style={homeStyles.categoryButtonText}>Fiction</Text>
        </TouchableOpacity>

      </ScrollView>

      </View>

      <View style={homeStyles.mainContent}>

            <ScrollView 
            style={homeStyles.booksContainer}
            contentContainerStyle={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",flexDirection:"row"}}
            scrollEnabled={scrollEnabled}  
            onContentSizeChange={handleContentSizeChange}    
            >
                <View style={homeStyles.booksWrapper} onTouchEnd={navigateToaddItemScreen}>
                    <View style={homeStyles.booksFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={homeStyles.bookImage}/>
                    </View>
                    <Text style={homeStyles.descriptionText}>title.......</Text>
                    <Text style={homeStyles.descriptionText}>Author</Text>
                    <Text style={homeStyles.descriptionText}>Price</Text>
                    <Text style={homeStyles.descriptionText}>Category</Text>

                    <View style={homeStyles.addToCartIconWrapper}>
                        <Icon style={homeStyles.addToCartIcon}/>
                    </View>

                </View>

                <View style={homeStyles.booksWrapper}>
                    <View style={homeStyles.booksFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={homeStyles.bookImage}/>
                    </View>
                    <Text style={homeStyles.descriptionText}>title.......</Text>
                    <Text style={homeStyles.descriptionText}>Author</Text>
                    <Text style={homeStyles.descriptionText}>Price</Text>
                    <Text style={homeStyles.descriptionText}>Category</Text>

                    <View style={homeStyles.addToCartIconWrapper}>
                        <Icon style={homeStyles.addToCartIcon}/>
                    </View>

                </View>

                <View style={homeStyles.booksWrapper}>
                    <View style={homeStyles.booksFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={homeStyles.bookImage}/>
                    </View>
                    <Text style={homeStyles.descriptionText}>title.......</Text>
                    <Text style={homeStyles.descriptionText}>Author</Text>
                    <Text style={homeStyles.descriptionText}>Price</Text>
                    <Text style={homeStyles.descriptionText}>Category</Text>

                    <View style={homeStyles.addToCartIconWrapper}>
                        <Icon style={homeStyles.addToCartIcon}/>
                    </View>

                </View>

                <View style={homeStyles.booksWrapper}>
                    <View style={homeStyles.booksFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={homeStyles.bookImage}/>
                    </View>
                    <Text style={homeStyles.descriptionText}>title.......</Text>
                    <Text style={homeStyles.descriptionText}>Author</Text>
                    <Text style={homeStyles.descriptionText}>Price</Text>
                    <Text style={homeStyles.descriptionText}>Category</Text>

                    <View style={homeStyles.addToCartIconWrapper}>
                        <Icon style={homeStyles.addToCartIcon}/>
                    </View>

                </View>

                <View style={homeStyles.booksWrapper}>
                    <View style={homeStyles.booksFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={homeStyles.bookImage}/>
                    </View>
                    <Text style={homeStyles.descriptionText}>title.......</Text>
                    <Text style={homeStyles.descriptionText}>Author</Text>
                    <Text style={homeStyles.descriptionText}>Price</Text>
                    <Text style={homeStyles.descriptionText}>Category</Text>

                    <View style={homeStyles.addToCartIconWrapper}>
                        <Icon style={homeStyles.addToCartIcon}/>
                    </View>

                </View>
                
                <View style={homeStyles.booksWrapper}>
                    <View style={homeStyles.booksFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={homeStyles.bookImage}/>
                    </View>
                    <Text style={homeStyles.descriptionText}>title.......</Text>
                    <Text style={homeStyles.descriptionText}>Author</Text>
                    <Text style={homeStyles.descriptionText}>Price</Text>
                    <Text style={homeStyles.descriptionText}>Category</Text>

                    <View style={homeStyles.addToCartIconWrapper}>
                        <Icon style={homeStyles.addToCartIcon}/>
                    </View>

                </View>

                <View style={homeStyles.booksWrapper}>
                    <View style={homeStyles.booksFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={homeStyles.bookImage}/>
                    </View>
                    <Text style={homeStyles.descriptionText}>title.......</Text>
                    <Text style={homeStyles.descriptionText}>Author</Text>
                    <Text style={homeStyles.descriptionText}>Price</Text>
                    <Text style={homeStyles.descriptionText}>Category</Text>

                    <View style={homeStyles.addToCartIconWrapper}>
                        <Icon style={homeStyles.addToCartIcon}/>
                    </View>

                </View>

                <View style={homeStyles.booksWrapper}>
                    <View style={homeStyles.booksFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={homeStyles.bookImage}/>
                    </View>
                    <Text style={homeStyles.descriptionText}>title.......</Text>
                    <Text style={homeStyles.descriptionText}>Author</Text>
                    <Text style={homeStyles.descriptionText}>Price</Text>
                    <Text style={homeStyles.descriptionText}>Category</Text>

                    <View style={homeStyles.addToCartIconWrapper}>
                        <Icon style={homeStyles.addToCartIcon}/>
                    </View>

                </View>
            </ScrollView>

      </View>

   </View>

   <Footernavigation keyboardVisible={keyboardVisible}/>
   
</View>
</TouchableWithoutFeedback>
     
    
</>)
}

export default Homepage