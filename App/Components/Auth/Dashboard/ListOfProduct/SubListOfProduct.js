import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SubListOfProduct = ({item}) => {
    return (
        <View style={styles.Container}>
            <View>
                <Image style={styles.ProductImage} source={item.Image}/>
            </View>
            <View>
                <Text style={styles.ProductName}>
                    {item.Title}
                </Text>
            </View>
            <View>
                <Text style={styles.ProductPrice}>
                    {item.Price}
                </Text>
            </View>
            <View style={{flexDirection:'row', gap: 5}}>
                <Text style={styles.ProductCrossedPrice}>
                    {item.CrossedPrice}
                </Text>
                <Text style={styles.Percentage}>
                    {item.Percentage}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'white',
        width: 150,
    },

    ProductImage:{
        borderRadius: 5,
        alignSelf:'center'
    },

    ProductName:{
        color:'black',
        fontWeight:'500'
    },

    ProductPrice:{
        color: 'black',
        fontWeight:'700'
    },

    ProductCrossedPrice:{
        color: '#808488',
        textDecorationLine:'line-through'
    },  

    Percentage:{
        color:'#FE735C'
    }
})

export default SubListOfProduct