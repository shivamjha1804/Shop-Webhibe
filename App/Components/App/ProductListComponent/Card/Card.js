import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Card = ({item, ...props}) => {
    return (
        <TouchableOpacity
            style={{
                padding: 10,
                flexDirection:'row',
                marginVertical: 10,
                borderRadius: 15,
                elevation:3,
                backgroundColor:'#fff',
                columnGap: 10,
            }}

            onPress={() => {
                if(props.onPress){
                    props.onPress()
                }
            }}
        >
            <View>
                <Image
                    style={{
                        borderRadius: 10,
                        height: 100,
                        width:100
                    }}
                    source={{uri:item?.product_image?.[0]}} 
                />
            </View>
            <View
                style={{
                    rowGap: 2,
                    paddingTop: 6
                }}
            >
                <Text
                    style={{
                        color:"#000",
                        paddingRight: 0,
                        fontSize: 15,
                        fontWeight: '600'
                    }}
                >
                    {item?.product_details?.[0]?.product_name}
                </Text>
                <Text
                    style={{
                        color:'#F83758',
                        fontSize:16,
                        fontWeight:'600',
                    }}
                >
                    {'\u20B9'}{item.product_costprice}
                </Text>
                <Text
                    style={{
                        color:'#000',
                        fontSize:13,
                        fontWeight:'600',
                        textDecorationLine:'line-through'
                    }}
                >
                    {'\u20B9'}{item.product_sellingprice}
                </Text>
                <Text
                    style={{
                        color:'#000',
                        fontSize:12,
                        fontWeight:'600',
                    }}
                >
                    Quantity: {item.product_quantity}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card