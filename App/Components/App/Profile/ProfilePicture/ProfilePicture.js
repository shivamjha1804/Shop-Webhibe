import React, { useEffect } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import NavigationService from '../../../../Services/Navigation'
import { useDispatch, useSelector } from 'react-redux'

const ProfilePicture = () => {
    const { profilePictureImage } = useSelector(state => state.Profile)

    console.log("profilePictureImage", profilePictureImage);
    return (        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 50, alignItems:'center'}}>

            <Image source={
                profilePictureImage == [] 
                ? require("../../../../Assets/Image/App/Profile/ProfilePicture/ProfilePicture.png") 
                : {uri: profilePictureImage}} 

                style={{
                    backgroundColor:"red",
                    height: "30%",
                    width:"30%",
                    borderRadius: 10
                }}
            />
            <TouchableOpacity
                onPress={() => {
                    NavigationService.navigate('ProfilePictureUpload')
                }}
            >
                <View style={{ backgroundColor: 'white', borderRadius: 25, padding: 3, position: 'relative', bottom: 30, left: 40 }}>
                    <View style={{ backgroundColor: '#4392F9', padding: 7, borderRadius: 15, }}>
                        <Image source={require("../../../../Assets/Image/App/Profile/ProfilePicture/editIcon.png")} />

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProfilePicture