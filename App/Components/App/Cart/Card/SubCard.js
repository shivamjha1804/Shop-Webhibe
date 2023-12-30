import React from 'react'
import { Image, Text, View } from 'react-native'
import Star from '../../../CommonComponent/Star/Star'

const SubCard = ({ item }) => {
    return (
        <View style={{ borderWidth: 0.3, borderRadius: 10, marginBottom: 10, borderColor: '#BBBBBB', padding: 12 }}>
            <View style={{ flexDirection: 'row', columnGap: 10 }}>
                <View>
                    <Image style={{ width: 138, borderRadius: 10 }} source={item.Image} />
                </View>
                <View style={{ rowGap: 5 }}>
                    <View>
                        <Text style={{ color: 'black', fontWeight: '600', fontSize: 17 }}>
                            {item.Title}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', columnGap: 5 }}>
                        <View>
                            <Text style={{ color: 'black' }}>
                                Variations :
                            </Text>
                        </View>
                        <View style={{ borderWidth: 0.5, paddingHorizontal: 5 }}>
                            <Text style={{ color: 'black' }}>
                                {item.Variation.Black}
                            </Text>
                        </View>
                        <View style={{ borderWidth: 0.5, paddingHorizontal: 5 }}>
                            <Text style={{ color: 'black' }}>
                                {item.Variation.Red}
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
                        <View>
                            <Text style={{ color: 'black', fontWeight: '500' }}>
                                {item.Rating}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Star
                                ActiveStarType='Entypo'
                                ActiveStarColor="#EDB310"
                                ActiveStarName="star"
                                DeactivateStarType="Entypo"
                                starSize={18}
                                DeactivateStarName="star"
                                DeactivateStarColor='#BBBBBB'
                                // containerStyle={{ flexDirection: 'row', marginLeft: 8 }}
                                defaultStar={item.Rating}

                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ color: 'black', fontWeight: '700', fontSize: 16, top: 10, left: 10 }}>
                                {item.Price}
                            </Text>
                        </View>
                        <View>
                            <View>
                                <Text style={{ color: '#EB3030', fontSize: 10, fontWeight: '600' }}>
                                    upto {item.Discount} off
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: '#A7A7A7', textDecorationLine: 'line-through' }}>
                                    {item.CrossedPrice}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: 30, borderWidth: 0.4, marginHorizontal: 15, borderColor: '#C4C4C4' }}></View>

            <View style={{ flexDirection: 'row', paddingBottom: 15, justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ color: 'black' }}>
                        Total Order (1)   :
                    </Text>
                </View>
                <View>
                    <Text style={{ color: 'black' }}>
                        $ 34.00
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default SubCard