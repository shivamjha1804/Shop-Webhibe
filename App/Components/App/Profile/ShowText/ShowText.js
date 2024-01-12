import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-basic-elements'

const ShowText = ({item}) => {
    // console.log("Item ------------ ", item);
  return (
    <View
        style={{
            marginTop: 20,
            rowGap: 20
        }}
    >
        <View>
            <Text
                style={{
                    color: '#000',
                    fontSize: 15,
                    fontWeight: '800',
                    marginBottom: 10
                }}
            >
                Name :-
            </Text>
            <View
                style={{
                    flexDirection:'row',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    columnGap: 15,
                    paddingVertical: 15,
                    borderRadius: 15
                }}
            >
                <Icon
                    name = 'user'
                    type = 'FontAwesome'
                />
                <Text
                    style={{
                        color:'#000',
                        fontSize: 15,
                        fontWeight: '600'
                    }}
                >
                    {item.name}
                </Text>
            </View>
        </View>


        <View>
            <Text
                style={{
                    color: '#000',
                    fontSize: 15,
                    fontWeight: '800',
                    marginBottom: 10
                }}
            >
                Email :-
            </Text>
            <View
                style={{
                    flexDirection:'row',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    columnGap: 15,
                    paddingVertical: 15,
                    borderRadius: 15
                }}
            >
                <Icon
                    name = 'email'
                    type = 'MaterialCommunityIcon'
                />
                <Text
                    style={{
                        color:'#000',
                        fontSize: 15,
                        fontWeight: '600'
                    }}
                >
                    {item.email}
                </Text>
            </View>
        </View>


        <View>
            <Text
                style={{
                    color: '#000',
                    fontSize: 15,
                    fontWeight: '800',
                    marginBottom: 10
                }}
            >
                Contact :-
            </Text>
            <View
                style={{
                    flexDirection:'row',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    columnGap: 15,
                    paddingVertical: 15,
                    borderRadius: 15
                }}
            >
                <Icon
                    name = 'call'
                    type = 'Ionicons'
                />
                <Text
                    style={{
                        color:'#000',
                        fontSize: 15,
                        fontWeight: '600'
                    }}
                >
                    {item.contact}
                </Text>
            </View>
        </View>


        <View>
            <Text
                style={{
                    color: '#000',
                    fontSize: 15,
                    fontWeight: '800',
                    marginBottom: 10
                }}
            >
                Pincode :-
            </Text>
            <View
                style={{
                    flexDirection:'row',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    columnGap: 15,
                    paddingVertical: 15,
                    borderRadius: 15
                }}
            >
                <Icon
                   name = 'location-pin'
                   type = 'Entypo'
                />
                <Text
                    style={{
                        color:'#000',
                        fontSize: 15,
                        fontWeight: '600'
                    }}
                >
                    {item.postalcode}
                </Text>
            </View>
        </View>
    </View>
  )
}

export default ShowText