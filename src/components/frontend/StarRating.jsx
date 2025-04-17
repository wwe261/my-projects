import { View, Text,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


import starRatingStyles from '../../../styles/frontend/StarRating'
import reviewStyles from '@/styles/frontend/Review'


const StarRating = () => {
    const [stars, setStars]=useState([1,2,3,4,5])
  return (<>
        <View style={starRatingStyles.container}>
              <View style={starRatingStyles.wrapper}>

                {stars.map((index, item)=>(
                    <TouchableOpacity key={index} style={starRatingStyles.IconWrapper}>
                        <Icon name="star" style={starRatingStyles.Icon}/>
                    </TouchableOpacity>

                ))}

              </View>
              
             <TouchableOpacity style={reviewStyles.reviewButton}>
                <Text style={reviewStyles.reviewButtonText}>Send Review</Text>
            </TouchableOpacity>

        </View>
         </>)
} 
       





export default StarRating