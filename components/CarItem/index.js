
import React from 'react-native'
import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import { styles } from './style'
import StyledButton from '../styledButton'

function CarItem({name, subtext, image, taglineCTA}) {

    const onpress = () =>
    {
        console.warn('Inventory')
    }
  return (
    <ImageBackground style={styles.Carcontainer} source={image}>
        <View style={styles.Header}>
            <Text style={styles.Heading}>
                {name}
            </Text>
            <Text style={styles.Text}>
                {subtext}  . 
                <Text style={styles.Text_uderline}>
                {taglineCTA}
            </Text>
            </Text>

        </View>

        <View style ={styles.Buttons}>
            <StyledButton text='Inventory' onpress={onpress}/>
            <StyledButton text='Models' color='primary' />
        </View>
       
       

    </ImageBackground>

  )
}

export default CarItem

