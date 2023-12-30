import React from 'react'
import { Text, View } from 'react-native'

const Title = (props) => {
    return (
        <View>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '700' }}>
                {props.Title}
            </Text>
        </View>
    )
}

export default Title