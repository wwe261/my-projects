import { View, Text, TextInput,TouchableWithoutFeedback, Keyboard, Image } from 'react-native'

import shippedStyles from '../../../styles/frontend/Shipped'

import Icon from 'react-native-vector-icons/FontAwesome6'

const Shipped = () => {
  return (<>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={shippedStyles.container}>
            <View style={shippedStyles.header}>
                <View style={shippedStyles.navigationIconWrapper}>
                    <Icon name="arrow-left" style={shippedStyles.navigationIcon}/>
                </View>

                <View style={shippedStyles.searchBarWrapper}>
                    <TextInput style={shippedStyles.textInput}/>
                    <View style={shippedStyles.searchIconWrapper}>
                        <Icon name="magnifying-glass" style={shippedStyles.searchIcon}/>
                    </View>
                </View>

            </View>
            <View style={shippedStyles.mainContent}>
               <Text style={shippedStyles.mainContentText}>Shipped Orders (0)</Text>

                <View style={shippedStyles.contentContainer}>
                    <Text style={shippedStyles.contentContainerText}>Order number:#788979777878776566</Text>
                    <View style={shippedStyles.wrapper}>
                          <View style={shippedStyles.imageFigure}>
                              <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')}
                               style={shippedStyles.image}
                              />
                          </View>
                          <View style={shippedStyles.imageFigure}>
                              <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')}
                               style={shippedStyles.image}
                              />
                          </View>

                          <View style={shippedStyles.imageFigure}>
                              <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')}
                               style={shippedStyles.image}
                              />
                          </View>

                          <View style={shippedStyles.imageFigure}>
                              <Image source={require('../../../assets/images/You by Caroline Kepnes.webp')}
                               style={shippedStyles.image}
                              />
                          </View>
                    </View>
                    <Text style={shippedStyles.wrapperText}>1 item Actual Price:R398</Text>
                </View>
            </View>

        </View>
        </TouchableWithoutFeedback>
         </>)
}

export default Shipped