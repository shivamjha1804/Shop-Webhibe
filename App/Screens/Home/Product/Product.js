import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'
import { useDispatch } from 'react-redux';
import { addCart, cart } from '../../../Redux/Thunk/Product';

const Product = ({ route }) => {
    const props = route.params.item;
    const dispatch = useDispatch();
    // console.log("props: ", props);
    const id = props._id;
    // console.log("id : ", id);
    


    const addToCart = (data) => {
        // console.log('datat>>',data);
        dispatch(addCart(data))
    };

    return (
        <View
            style={{
                paddingHorizontal: 20,
                backgroundColor: '#fff',
                flex: 1
            }}
        >
            <Header2 ImageLeft={require("../../../Assets/Image/App/Shop/Header2/BackIcon.png")} ImageRight={require("../../../Assets/Image/App/Shop/Header2/cartIcon.png")} />
            {/* ProductImage */}
            <Image
                style={{
                    borderRadius: 10,
                    height: 100,
                    width:100,
                    alignSelf:'center',
                    marginVertical: 20,
                }}
                source={{uri:props?.product_image?.[0]}} 
            />
            {/* ProductLabel */}
            <Text
                style={{
                    color: 'black',
                    fontSize: 25,
                    fontWeight: '800',
                    marginTop: 10
                }}
            >
                {props.product_name}
            </Text>
            {/* Two Pricing */}
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 10,
                        marginVertical: 10
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 23,
                            fontWeight: '700',
                        }}
                    >
                        Price:
                    </Text>

                    <Text
                        style={{
                            color: '#F83758',
                            fontSize: 23,
                            fontWeight: '700',
                        }}
                    >
                        {'\u20B9'}{props.product_costprice}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 10,
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 20,
                            fontWeight: '600',
                        }}
                    >
                        Selling Price :
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 20,
                            fontWeight: '600',
                            textDecorationLine: 'line-through'
                        }}
                    >
                        {'\u20B9'}{props.product_sellingprice}
                    </Text>
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10,
                    marginVertical: 10
                }}
            >
                <Text
                    style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500',
                    }}
                >
                    Quantity :
                </Text>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 18,
                        fontWeight: '500',
                    }}
                >
                    {props.product_quantity}
                </Text>
            </View>
            {/* buttons */}
            <View
                style={{
                    flexDirection: 'row',
                    columnGap: 20,
                    marginTop: 20
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor:'orange',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 10
                    }}

                    onPress={() => {
                        addToCart(id)
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '900',
                            color:'#000'
                        }}
                        
                    >
                        Add To Cart
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor:'green',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 10
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '900',
                            color:'#000'
                        }}
                    >
                        Buy Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Product