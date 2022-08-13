
import { Dimensions,Text, View , FlatList} from 'react-native'
import CarItem from '../CarItem'

import cars from './cars'


const CarsList = ()=>
{
    return (
        <View style={{
            width: '100%',
            height: '100%',
        }}>
            <FlatList style={{
    
            }}
                data={cars}
                renderItem={({item}) =>   <CarItem name={item.name}  image={item.image} subtext={item.subtext} taglineCTA={item.taglineCTA}/> }
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height + 70}
                />
        </View>

    )
}

export default CarsList
