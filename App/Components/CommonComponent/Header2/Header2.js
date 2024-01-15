import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NavigationService from '../../../Services/Navigation';

const Header2 = ({ImageLeft, Title, ImageRight}) => {
    // console.log("PROPS:----", ImageLeft);
    // console.log("PROPS:----", Title);
    // console.log("PROPS:----", ImageRight);
    return (
        <View style={styles.Container}>
            <TouchableOpacity onPress={() => {
                NavigationService.back()
            }}>
                <View>
                    <Image source={ImageLeft} />
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.Text}>
                    {Title}
                </Text>
            </View>
            {
                ImageRight === undefined
                    ? <View>

                     </View>
                    : <TouchableOpacity onPress={() => {
                        NavigationService.navigate("Cart")
                    }}>
                        <View>
                            <Image source={
                                ImageRight
                            }
                            />
                        </View>
                    </TouchableOpacity>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    Text: {
        color: 'black',
        fontWeight: '600',
        fontSize: 20
    }
});

export default Header2