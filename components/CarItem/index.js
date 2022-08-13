
import React from 'react-native'
import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import { styles } from './style'

function CarItem({name, subtext, image}) {
  return (
    <ImageBackground style={styles.Carcontainer} source={require('../../assets/images/ModelS.jpeg')}>
        <View style={styles.Header}>
            <Text style={styles.Heading}>
                {name}
            </Text>
            <Text style={styles.Text}>
                {subtext}
            </Text>
        </View>

    </ImageBackground>

  )
}

export default CarItem

