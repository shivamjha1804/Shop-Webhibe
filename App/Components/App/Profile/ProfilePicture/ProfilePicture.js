import React, { useEffect, useState } from 'react'
import { Dimensions, Image, PermissionsAndroid, Text, TouchableOpacity, View } from 'react-native'
import NavigationService from '../../../../Services/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import ReactNativeModal from 'react-native-modal'
import { moderateScale } from '../../../../Constants/PixelRatio'
import ImagePicker from 'react-native-image-crop-picker';
import { updateProfile } from '../../../../Redux/Thunk/Profile'

const {height, width} = Dimensions.get('window');

const ProfilePicture = () => {
    const { profilePictureImage } = useSelector(state => state.Profile)
    const [isModalVisible, setModalVisible] = useState(false);
    const [pathImage, setPathImage] = useState([]);
    const dispatch = useDispatch();


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

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
                ImagePicker.openCamera({
                    width: 300,
                    height: 400,
                    cropping: true,
                }).then(image => {
                    setPathImage(image)
                    console.log(image);
                    uploadImage(image)
                });

            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };


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
    }


    console.log("profilePictureImage", profilePictureImage);
    return (
        <View>
            <ReactNativeModal
                isVisible={isModalVisible}
                onBackButtonPress={() => setModalVisible(false)}
                onBackdropPress={() => setModalVisible(false)}
                style={{
                    backgroundColor: 'white',
                    margin:0,
                    marginTop: 650,
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25
                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        justifyContent: 'space-around',
                        marginHorizontal:25
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor:'grey',
                            paddingVertical: 15,
                            paddingHorizontal: 30,
                            alignItems:'center',
                            borderRadius: 15,
                            elevation: 5
                        }}

                        onPress={() => {
                            requestCameraPermission();
                            toggleModal()
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: '#000',
                                fontWeight: '800'
                            }}
                        >
                            Camera
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor:'grey',
                            paddingVertical: 15,
                            paddingHorizontal: 30,
                            alignItems:'center',
                            borderRadius: 15,
                            elevation: 5
                        }}

                        onPress={() => {
                            imagePick();
                            toggleModal()
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: '#000',
                                fontWeight: '800'       
                            }}
                        >
                            Album
                        </Text>
                    </TouchableOpacity>
                </View>
            </ReactNativeModal>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 50, alignItems: 'center' }}>

                <Image source={
                    profilePictureImage == []
                        ? require("../../../../Assets/Image/App/Profile/ProfilePicture/ProfilePicture.png")
                        : { uri: profilePictureImage }}

                    style={{
                        backgroundColor: "red",
                        height: 120,
                        width: 120,
                        borderRadius: 60,
                    }}
                />
                {/* <Image source={require("../../../../Assets/Image/App/Profile/ProfilePicture/ProfilePicture.png")}


                style={{
                    backgroundColor: "red",
                    height: "30%",
                    width: "30%",
                    borderRadius: 10
                }}
            /> */}
                <TouchableOpacity
                    onPress={() => {
                        toggleModal();
                    }}
                >
                    <View style={{ backgroundColor: 'white', borderRadius: 25, padding: 3, position: 'relative', bottom: 30, left: 40 }}>
                        <View style={{ backgroundColor: '#4392F9', padding: 7, borderRadius: 15, }}>
                            <Image source={require("../../../../Assets/Image/App/Profile/ProfilePicture/editIcon.png")} />

                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfilePicture