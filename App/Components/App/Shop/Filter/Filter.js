import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Filter = (props) => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.Container}>
                <View style={styles.Row1}>
                    <Text style={styles.Text1}>
                        {props.Title}
                    </Text>
                </View>
                <View style={styles.Row2}>
                    <Text style={styles.Text2}>
                        Sort
                    </Text>
                    <Image source={require('../../../../Assets/Image/App/Shop/Filter/sortIcon.png')} />
                </View>
                <View style={styles.Row3}>
                    <Text style={styles.Text2}>
                        Filter
                    </Text>
                    <Image source={require('../../../../Assets/Image/App/Shop/Filter/filterIcon.png')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center'
    },

    Row1: {
        width: "36%"
    },

    Text1: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600'
    },

    Row2: {
        flexDirection: 'row',
        marginLeft: 100,
        alignItems: 'center'
    },

    Text2: {
        color: 'black'
    },

    Row3: {
        flexDirection: 'row',
        marginLeft: "10%",
        alignItems: 'center'
    },


})

export default Filter