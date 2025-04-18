import { View, Text, TextInput,TouchableOpacity,Image,ScrollView } from 'react-native'
import { useNavigation } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/Ionicons'

import addToCartStyles from '../../../styles/frontend/AdditemtocartScreen'

const AdditemtocartScreen = ({navigation}) => {


  return (<>
        <View style={addToCartStyles.container}>

            <View style={addToCartStyles.header}>

                <TouchableOpacity style={addToCartStyles.navigationIconWrapper} onPress={()=>navigation.goBack()}>
                    <Icon name="arrow-left" style={addToCartStyles.navigationIcon}/>
                </TouchableOpacity>

                <View style={addToCartStyles.searchWrapper}>

                    <TextInput style={addToCartStyles.textInput}/>
                    <View style={addToCartStyles.searchIconWrapper}>
                        <Icon name="search" style={addToCartStyles.searchIcon}/>
                    </View>

                </View>

                <View style={addToCartStyles.rightNavigationBar}>
                    <TouchableOpacity style={addToCartStyles.cartIconWrapper}>
                        <Icon name="shopping-bag" style={addToCartStyles.cartIcon}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={addToCartStyles.shareIconWrapper}>
                        <Icon name="share" style={addToCartStyles.shareIcon}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={addToCartStyles.menuIconWrapper}>
                        <Icons name="ellipsis-vertical-outline"  style={addToCartStyles.menuIcon}/>
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView style={addToCartStyles.mainContent}>

                <View style={addToCartStyles.bookInfoWrapper}>

                    <View style={addToCartStyles.imageFigure}>
                        <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')} style={addToCartStyles.image}/>
                    </View>

                </View>
                
             <View style={addToCartStyles.bottomContainer}>

                <Text style={addToCartStyles.descriptionText}>Price</Text>
                <Text style={addToCartStyles.descriptionText} >title...</Text>
                <Text style={addToCartStyles.descriptionText}>Author: Caroline Kepnes</Text>
                <Text style={addToCartStyles.descriptionText}>Category: Fiction</Text>
                
                <View style={addToCartStyles.reviewWrapper}>

                    <View style={addToCartStyles.viewAnalytics}>
                        <Text style={addToCartStyles.analyticsText}>Reviews(100+)</Text>

                        <View style={addToCartStyles.viewReviews}>
                        <Text style={addToCartStyles.viewReviewText}>View All</Text>

                            <View style={addToCartStyles.visitIconWrapper}>
                                 <Icon name="greater-than" style={addToCartStyles.visitIcon}/>
                            </View>

                        </View>
                        

                    </View>
                    
                    <View style={addToCartStyles.ratingsWrapper}>

                            <View style={addToCartStyles.starIconWrapper}>
                                <Icon name="star" style={addToCartStyles.starIcon}/>
                            </View>
                            
                            <Text style={addToCartStyles.ratingsValue}>4.93</Text>
                    </View>

                </View>

            </View>
            </ScrollView>
         
            <View style={addToCartStyles.addToCartWrapper}>
                <TouchableOpacity style={addToCartStyles.addToCartButton}>
                    <Text style={addToCartStyles.addToCartText}>ADD TO CART</Text>
                </TouchableOpacity>
            </View>

        </View>

        </>)
}

export default AdditemtocartScreen