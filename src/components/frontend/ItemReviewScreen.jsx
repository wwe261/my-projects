import { View, Text,TextInput,TouchableWithoutFeedback,Keyboard,Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/MaterialIcons'

import itemReviewStyle from '../../../styles/frontend/ItemReviewScreen'
import shippedStyles from '@/styles/frontend/Shipped'
import { useState } from 'react'

const ItemReviewScreen = () => {
    const [star,setStar]=useState([1,2,3,4,5])
  return (<>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={itemReviewStyle.container}>

            <View style={shippedStyles.header}>
                    <View style={shippedStyles.navigationIconWrapper}>
                        <Icon name="arrow-left" style={shippedStyles.navigationIcon}/>
                    </View>

                    <View style={shippedStyles.searchBarWrapper}>
                        <TextInput style={shippedStyles.textInput}/>
                        <View style={shippedStyles.searchIconWrapper}>
                            <Icon name="search" style={shippedStyles.searchIcon}/>
                        </View>
                    </View>

            </View>

            <View style={itemReviewStyle.mainContent}>
                <View style={itemReviewStyle.wrapper}>

                    <View style={itemReviewStyle.mainHeader}>
                        <View style={itemReviewStyle.Profile}>

                            <View style={itemReviewStyle.imageFigure}>
                                <Image source={require('../../../assets/images/sethrollins.0.jpg')}  style={itemReviewStyle.image}/>
                            </View>

                            <Text style={itemReviewStyle.ProfileText}>Ashl</Text>
                        </View>
                        <View style={itemReviewStyle.ratingStarsWrapper}>
                            {star.map((item,index)=>(
                                <View key={index} style={itemReviewStyle.IconWrapper}>
                                    <Icon name="star" style={itemReviewStyle.icon}/>
                                </View>
                            ))}
                        </View>
                        <View style={itemReviewStyle.dateOfReview}>
                            <Text style={itemReviewStyle.dateText}>05/02/2023</Text>
                        </View>
                    </View>

                    <View style={itemReviewStyle.reviewTextWrapper}>
                            <Text style={itemReviewStyle.reviewText}>This item i find it amazing</Text>
                    </View>

                    <View style={itemReviewStyle.ImageWrapper}>
                        <View style={itemReviewStyle.ImageContainer}>
                            <Image source={require('../../../assets/images/sethrollins.0.jpg')} style={itemReviewStyle.Image}/>
                        </View>
                    </View>
                    
                    <View style={itemReviewStyle.helpfulWrapper}>
                        <View style={itemReviewStyle.helpfulIconWrapper}>
                             <Icon name="thumbs-up" style={itemReviewStyle.helpfulIcon}/>
                        </View>
                        <View style={itemReviewStyle.menuIconWrapper}>
                            <Icons name="more-horiz" style={itemReviewStyle.menuIcon}/>
                        </View>
                    </View>

                </View>

                <View style={itemReviewStyle.wrapper}>

                    <View style={itemReviewStyle.mainHeader}>
                        <View style={itemReviewStyle.Profile}>

                            <View style={itemReviewStyle.imageFigure}>
                                <Image source={require('../../../assets/images/sethrollins.0.jpg')}  style={itemReviewStyle.image}/>
                            </View>

                            <Text style={itemReviewStyle.ProfileText}>Ashl</Text>
                        </View>
                        <View style={itemReviewStyle.ratingStarsWrapper}>
                            {star.map((item,index)=>(
                                <View key={index} style={itemReviewStyle.IconWrapper}>
                                    <Icon name="star" style={itemReviewStyle.icon}/>
                                </View>
                            ))}
                        </View>
                        <View style={itemReviewStyle.dateOfReview}>
                            <Text style={itemReviewStyle.dateText}>05/02/2023</Text>
                        </View>
                    </View>

                    <View style={itemReviewStyle.reviewTextWrapper}>
                            <Text style={itemReviewStyle.reviewText}>This item i find it amazing</Text>
                    </View>

                    <View style={itemReviewStyle.ImageWrapper}>
                        <View style={itemReviewStyle.ImageContainer}>
                            <Image source={require('../../../assets/images/sethrollins.0.jpg')} style={itemReviewStyle.Image}/>
                        </View>
                    </View>
                    
                    <View style={itemReviewStyle.helpfulWrapper}>
                        <View style={itemReviewStyle.helpfulIconWrapper}>
                             <Icon name="thumbs-up" style={itemReviewStyle.helpfulIcon}/>
                        </View>
                        <View style={itemReviewStyle.menuIconWrapper}>
                            <Icons name="more-horiz" style={itemReviewStyle.menuIcon}/>
                        </View>
                    </View>

                </View>
                
            </View>
        </View>
        </TouchableWithoutFeedback>
         </>)
}

export default ItemReviewScreen