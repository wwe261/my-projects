import { View, Text,TouchableOpacity, TextInput, KeyboardAvoidingView,Platform,
         ScrollView,TouchableWithoutFeedback,Keyboard , Image} from 'react-native'
import { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5'

import homeStyles from '../../../styles/frontend/Homepage'

import animations from '../../animations/animations'
import Searchcomponent from '../../sharedComponets/Searchcomponent'
import Footernavigation from '../../sharedComponets/Footernavigation'

const Homepage = () => {
    const {displayedText,headerTextAnimation}=animations()
     headerTextAnimation()

     const [keyboardVisible, setKeyboardVisible] = useState(false);

      useEffect(() => {
      const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
      const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

   return () => {
    showSub.remove();
    hideSub.remove();
   };
}, []);

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
                  showsHorizontalScrollIndicator={true}
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
       

      </ScrollView>
      </View>
      <View style={homeStyles.mainContent}>
            <View style={homeStyles.booksContainer}>
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
                
            </View>
      </View>
   </View>

   <Footernavigation keyboardVisible={keyboardVisible}/>
   

     



</View>
</TouchableWithoutFeedback>
     
    
</>)
}

export default Homepage