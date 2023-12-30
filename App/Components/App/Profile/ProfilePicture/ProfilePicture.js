import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

const ProfilePicture = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
            <Image source={require("../../../../Assets/Image/App/Profile/ProfilePicture/ProfilePicture.png")} />
            <TouchableOpacity>
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