import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Star from '../../../CommonComponent/Star/Star'

const Description = () => {
    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.ProductName}>
                    NIke Sneakers
                </Text>
            </View>
            <View>
                <Text style={styles.Description}>
                    Vision Alta Men’s Shoes Size (All Colours)
                </Text>
            </View>
            <View style={{flexDirection:'row', paddingVertical:10, alignItems:'center', columnGap: 10}}>
                <View style={{flexDirection:'row', columnGap:2}}>
                    <Star
                                ActiveStarType='Entypo'
                                ActiveStarColor="#EDB310"
                                ActiveStarName="star"
                                DeactivateStarType="Entypo"
                                starSize={18}
                                DeactivateStarName="star"
                                DeactivateStarColor='#BBBBBB'
                                // containerStyle={{ flexDirection: 'row', marginLeft: 8 }}
                                defaultStar={3.5}

                            />
                </View>
                <View>
                    <Text style={styles.RatingText}>
                        56,890
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:'row', columnGap:10}}>
                <Text style={{color:'#808488', textDecorationLine:'line-through'}}>
                    ₹2,999
                </Text>
                <Text style={{color:'black', fontWeight:'600'}}>
                    ₹1,500
                </Text>
                <Text style={{color:'#FA7189', fontWeight:'700'}}>
                    50%Off
                </Text>
            </View>
            <View>
                <Text style={styles.ProductDetails}>
                    Product Details
                </Text>
            </View>
            <View>
                <Text style={{color:'black'}}>
                    Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. This 2015 release saw the ...More
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ProductName:{
        color:'black',
        fontSize: 25,
        fontWeight:'600',

    },

    Container:{
        paddingVertical: 15
    },

    Description:{
        color:'black',
        fontSize: 15
    },

    RatingContainer:{
        flexDirection:'row', 
        paddingVertical:10, 
        alignItems:'center', 
        columnGap: 10
    },

    RatingText:{
        color:'#828282'
    },

    ProductDetails:{
        color:'black', 
        fontWeight:'500',
        marginTop: 10,
        marginBottom: 3
    }
})

export default Description