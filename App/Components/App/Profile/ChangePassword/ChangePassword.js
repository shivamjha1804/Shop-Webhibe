import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ChangePassword = () => {
    return (
        <TouchableOpacity>
            <View style={{flexDirection:'row-reverse'}}>
                <Text style={{color:"#F83758"}}>
                    Change Password
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ChangePassword