import React from 'react'
import { Text, View } from 'react-native'
import { AppTextInput, Icon } from 'react-native-basic-elements'

const InputText = (prop) => {
  return (
    <View style={{paddingVertical: 10}}>
        <AppTextInput
            title= {prop.Title}
            titleStyle={{
              color: 'black',
              fontSize: 15
            }}

            inputContainerStyle={{borderColor:"#C8C8C8"}}
            
            keyboardType={prop.Number}

            style={{borderColor:"#C8C8C8", paddingHorizontal:15}}
             
            // placeholder = ""
            secureTextEntry = {prop.Password}
        />
    </View>
  )
}

export default InputText