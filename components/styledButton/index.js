import { View, Text, Pressable} from 'react-native'

import { styles } from './style'

const  StyledButton = ({text, color, onpress})  => {
  return (
    <Pressable style= {styles.ButtonConatiner} onPress={onpress}>
        <Text style={[
            styles.Text,
            {
                backgroundColor: color == 'primary' ? 'white' : 'black',
                color: color === 'primary' ? 'black': 'white',
            }
            ]}>{text}</Text>
    </Pressable>
  )
}

export default StyledButton