import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const SubSummerSale = (props) => {
    return (
        <View>
            <View style={styles.Row1}>
                <Image style={{ borderRadius: 8, width:380 }} source={props.Image} />
            </View>
            <View style={styles.Row2}>
                <View>
                    <Text style={styles.Title}>
                        {props.Title}
                    </Text>
                    <View>
                        <Text style={styles.SubTitle}>
                            {props.SubTitle}
                        </Text>
                    </View>
                </View>
                <View >
                    <View>
                        <TouchableOpacity style={styles.Button}>
                            <Text style={styles.Text}>
                                View all
                            </Text>
                            <Image source={require("../../../../Assets/Image/App/Dashboard/SummerSale/arrowIcon.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    Row2: {
        rowGap: 2,
        marginTop: 8,
        marginLeft: 10,
        flexDirection:'row',
        columnGap: 25,
        paddingBottom: 25
    },

    Title: {
        color: 'black',
        fontSize: 23,
        fontWeight: '500'
    },

    SubTitle: {
        color: 'black',
        fontSize: 18
    },

    Button: {
        marginTop: 15,
        marginLeft:30,
        backgroundColor: '#F83758',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },

    Text:{
        color:'white'
    }
})

export default SubSummerSale