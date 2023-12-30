import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const SubSize = ({item, getSize}) => {
  return (
    <View style={{paddingRight: 8}}>
        {/* Buttom */}
        <View style={{ columnGap: 15}}>
            <View>
                <TouchableOpacity style={{...styles.Button, }}  onPress={() => {
                    getSize(`${item.size}`)

                }}>
                    <Text style={styles.Text}>
                        {item.size}UK
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Button:{
        borderColor:"#FA7189",
        paddingHorizontal:10,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 2
    },

    Text:{
        color:'#FA7189'
    },

    
});

export default SubSize