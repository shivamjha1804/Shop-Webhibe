import React, { useEffect } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'
import ProfilePicture from '../../../Components/App/Profile/ProfilePicture/ProfilePicture'
import Title from '../../../Components/App/Profile/Title/Title'
import InputText from '../../../Components/App/Profile/InputText/InputText'
import ChangePassword from '../../../Components/App/Profile/ChangePassword/ChangePassword'
import Button from '../../../Components/App/Profile/Button/Buton'
import { Icon } from 'react-native-basic-elements'
import NavigationService from '../../../Services/Navigation'
import ShowText from '../../../Components/App/Profile/ShowText/ShowText'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../../Redux/Thunk/Profile'

const Profile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])

    const { getProfileData } = useSelector(state => state.Profile);
    // console.log("data::::", getProfileData);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                paddingHorizontal: 20
            }}
        >
            <Header2 ImageLeft={require("../../../Assets/Image/App/Shop/Header2/BackIcon.png")} Title={"Profile"} />
            <ProfilePicture />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: '#fff'
                }}
            >
                <Title Title={"Personal Details"} />
                <TouchableOpacity
                    onPress={() => {
                        NavigationService.navigate('ProfileForm')
                    }}
                >
                    <Icon
                        name='account-edit'
                        type='MaterialCommunityIcon'
                        size={28}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 1, flex: 1 }}>
                {
                    getProfileData.map((item, index) => {
                        return (
                            <ShowText
                                item={item}
                                key={index}
                            />
                        )
                    })
                }
                {/* <InputText Title={"Email Address"} /> */}
                {/* <InputText Title={"Password"} Password={true} />
                <ChangePassword />
                <View style={{ marginVertical: 30, borderWidth: 0.4, marginHorizontal: 15, borderColor: '#C4C4C4' }}></View>
                <Title Title={"Business Address Details"} />
                <InputText Title={"Pincode"} Number={'numeric'} />
                <InputText Title={"Address"} />
                <InputText Title={"City"} />
                <InputText Title={"State"} />
                <InputText Title={"Country"} />
                <View style={{ marginVertical: 30, borderWidth: 0.4, marginHorizontal: 15, borderColor: '#C4C4C4' }}></View>
                <Title Title={"Bank Account Details"} />
                <InputText Title={"Bank Account Number"} />
                <InputText Title={"Account Holder’s Name"} />
                <InputText Title={"IFSC Code"} />
                <Button Title={"Save"} /> */}

            </ScrollView>


        </View>
    )
}

export default Profile