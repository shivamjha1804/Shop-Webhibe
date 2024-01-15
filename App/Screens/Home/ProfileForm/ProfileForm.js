import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { AppTextInput, Icon } from 'react-native-basic-elements'
import Title from '../../../Components/App/Profile/Title/Title'
import { useDispatch } from 'react-redux'
import { getProfile, putProfile } from '../../../Redux/Thunk/Profile'
import NavigationService from '../../../Services/Navigation'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'

const ProfileForm = () => {
    const dispatch = useDispatch();
    const [name, getName] = useState("");
    const [email, getEmail] = useState("");
    const [contact, getContact] = useState("");
    const [pincode, getPincode] = useState("");

    // useEffect(() => {
    //     dispatch(getProfile())
    // }, [dispatch])

    const updateProfile = () => {
        if (name === "") {
            alert("Please Enter Your Name")
            return;
        }

        if (email === "") {
            alert("Please Enter Your Email")
            return;
        }
        
        if (contact === 0) {
            alert("Please Enter Your Contact")
            return;
        }
        
        if (pincode === 0) {
            alert("Please Enter Your Pincode")
            return;
        }

        const data = {
            name : name,
            email : email,
            contact : contact,
            postalcode : pincode
        }
        // console.log("Clicked");
        dispatch(putProfile(data))
        NavigationService.navigate('Profile')
    }

    return (
        <View
            style={{
                backgroundColor: '#fff',
                flex: 1,
                paddingHorizontal: 20,
                rowGap: 15,
            }}
        >
            <Header2 ImageLeft={require("../../../Assets/Image/App/Cart/Header2/BackIcon.png")} Title={"Update Profile Detail"}/>

            <Title Title={"Fill The Details:"}/>
            <AppTextInput
                title='Name'
                titleStyle={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 15
                }}
                leftIcon={{
                    name: 'user',
                    type: 'FontAwesome'
                }}

                value={name}
                onChangeText={(Text) => {
                    getName(Text)
                }}
                
                placeholder="Enter Your Name"
                // secureTextEntry={true}
                // rightAction={<Icon
                //     name='eye'
                //     type='Ionicon'
                // />}
            />
            <AppTextInput
                title='Email'
                titleStyle={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 15
                }}
                leftIcon={{
                    name: 'email',
                    type: 'MaterialCommunityIcon'
                }}

                value={email}
                onChangeText={(Text) => {
                    getEmail(Text)
                }}

                placeholder="Enter Your Email"
                // secureTextEntry={true}
                // rightAction={<Icon
                //     name='eye'
                //     type='Ionicon'
                // />}
            />
            <AppTextInput
                title='Contact'
                titleStyle={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 15
                }}
                leftIcon={{
                    name: 'call',
                    type: 'Ionicons'
                }}

                value={String(contact)}
                onChangeText={(Text) => {
                    getContact(Number(Text))
                }}

                keyboardType='numeric'
                maxLength={10}

                placeholder="Enter Your Number"
                // secureTextEntry={true}
                // rightAction={<Icon
                //     name='eye'
                //     type='Ionicon'
                // />}
            />
            <AppTextInput
                title='Pincode'
                titleStyle={{
                    color: '#000',
                    fontWeight: '800',
                    fontSize: 15
                }}
                leftIcon={{
                    name: 'location-pin',
                    type: 'Entypo'
                }}
                
                placeholder="Enter Your Pincode"
                value={String(pincode)}
                onChangeText={(Text) => {
                    getPincode(Number(Text))
                }}

                keyboardType='numeric'
                maxLength={6}

                // secureTextEntry={true}
                // rightAction={<Icon
                //     name='eye'
                //     type='Ionicon'
                // />}
            />

            <TouchableOpacity
                style={{
                    backgroundColor:"#4681f4",
                    paddingHorizontal:25,
                    paddingVertical:15,
                    borderRadius:15,
                    elevation:20,
                    color:'#fff',
                    alignSelf:'center',
                    marginVertical:30,
                }}

                onPress={() => {
                    updateProfile()
                }}
            >
                <Text
                    style={{
                        color:'#fff',
                        fontSize:20,
                        fontWeight:'700'
                    }}
                >
                    Confirm
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileForm