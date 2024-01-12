import React, { useState } from 'react'
import { PermissionsAndroid, Text, TouchableOpacity, View } from 'react-native'
import Header2 from '../../../CommonComponent/Header2/Header2'
import ImagePicker from 'react-native-image-crop-picker';
import ProfileService from '../../../../Services/Profile';
import NavigationService from '../../../../Services/Navigation';
import { useDispatch } from 'react-redux';



const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Shop App Wants To Take The Permission Of the Camera',
                message:
                    'For uploading the profile picture please grant the permission',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
        } else {
            console.log('Camera permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
};




const ProfilePictureUpload = () => {
    const dispatch = useDispatch();

    const [pathImage, setPathImage] = useState([]);

    const imagePick = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setPathImage(image)
            console.log(image);
            uploadImage(image)

        }).catch((err) => {
            console.log(err)
        })
    }

    console.log("Image:-", pathImage);

    const uploadImage = (image) => {
        dispatch(updateProfile(image))

        NavigationService.navigate('Profile')
    }

    return (
        <View
            style={{
                backgroundColor: '#fff',
                flex: 1,
                paddingHorizontal: 20
            }}
        >
            <Header2 ImageLeft={require("../../../../Assets/Image/App/Cart/Header2/BackIcon.png")} Title={"Profile Picture Upload"} />

            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '98%',
                    rowGap: 15
                }}
            >
                <Text
                    style={{
                        color: '#000',
                        fontSize: 20,
                        fontWeight: '700',
                    }}
                >
                    Upload Your profile Picture
                </Text>

                <View
                    style={{
                        borderWidth: 1,
                        borderRadius: 5,
                        width: "50%"
                    }}
                >
                    <View
                        style={{
                            paddingHorizontal: 10
                        }}
                    >
                        {
                            pathImage == [] ? '' : <Text
                                style={{
                                    color: '#000',
                                }}
                            >
                                {pathImage.path}
                            </Text>
                        }
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            columnGap: 15,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#7393B3',
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                alignItems: 'center',
                                borderRadius: 5
                            }}
                            onPress={() => {
                                requestCameraPermission();
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 12,
                                    fontWeight: '600'
                                }}
                            >
                                Camera
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#088F8F',
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                alignItems: 'center',
                                borderRadius: 5
                            }}

                            onPress={() => {
                                imagePick()
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 12,
                                    fontWeight: '600'
                                }}
                            >
                                Album
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#33b249',
                        paddingHorizontal: 30,
                        paddingVertical: 15,
                        borderRadius: 15,
                        elevation: 10
                    }}

                    onPress={() => {
                        uploadImage()
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 20,
                            fontWeight: '700'
                        }}
                    >
                        Upload
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfilePictureUpload