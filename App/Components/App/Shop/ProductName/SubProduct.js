import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Star from '../../../CommonComponent/Star/Star'

const SubProduct = ({ item }) => {
    return (
        <View style={{ width: 150, paddingVertical: 10, }}>
            <View style={styles.Row1}>
                <Image borderRadius={5} style={{ width: 181, height: 150 }} source={item.Image} />
            </View>
            <View style={styles.Row2}>
                <Text style={styles.ProductName}>
                    {item.Title}
                </Text>
            </View>
            <View style={styles.Row3}>
                <Text style={styles.ProductDiscription}>
                    {item.Description}
                </Text>
            </View>
            <View style={styles.Row4}>
                <Text style={styles.ProductPrice}>
                    {item.Price}
                </Text>
            </View>
            <View style={styles.Row5}>
                <Text style={styles.CrossedPrice}>
                    {item.CrossedPrice}
                </Text>
                <Text style={styles.Percentage}>
                    {item.Percentage}
                </Text>
            </View>
            <View style={styles.Row6}>
                <View style={styles.StarGroup}>
                    <Star
                        ActiveStarType='Entypo'
                        ActiveStarColor="#EDB310"
                        ActiveStarName="star"
                        DeactivateStarType="Entypo"
                        starSize={18}
                        DeactivateStarName="star"
                        DeactivateStarColor='#BBBBBB'
                        // containerStyle={{ flexDirection: 'row', marginLeft: 8 }}
                        defaultStar={4}

                    />
                </View>
                <Text style={styles.Rating}>
                    {item.Rating}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    Row2: {
        marginTop: 10,
        marginLeft: 5
    },
    ProductName: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600'
    },

    Row3: {
        marginTop: 10,
        marginLeft: 5
    },

    ProductDiscription: {
        color: 'black',
        fontSize: 12,
        fontWeight: '400',
        width: "95%"
    },

    Row4: {
        marginTop: 8,
        marginLeft: 5

    },

    ProductPrice: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',

    },

    Row5: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 2,
        marginLeft: 5
    },

    CrossedPrice: {
        color: '#BBBBBB',
        fontSize: 15,
        fontWeight: '300',
        textDecorationLine: 'line-through'
    },

    Percentage: {
        color: '#FE735C',
        fontSize: 15,
        fontWeight: '300'
    },

    Row6: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        marginLeft: 5
    },

    StarGroup: {
        flexDirection: 'row',
    },

    Star: {
        height: "120%",
        marginRight: 5
    },

    Rating: {
        fontWeight: '300',
        color: "#A4A9B3"
    }
})

export default SubProduct