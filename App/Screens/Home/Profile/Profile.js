import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'
import ProfilePicture from '../../../Components/App/Profile/ProfilePicture/ProfilePicture'
import Title from '../../../Components/App/Profile/Title/Title'
import InputText from '../../../Components/App/Profile/InputText/InputText'
import ChangePassword from '../../../Components/App/Profile/ChangePassword/ChangePassword'
import Button from '../../../Components/App/Profile/Button/Buton'

const Profile = () => {
    return (
        <ScrollView style={{ backgroundColor: 'white', paddingHorizontal: 10 }}>
            <Header2 ImageLeft={require("../../../Assets/Image/App/Shop/Header2/BackIcon.png")} Title={"Checkout"} />
            <ProfilePicture/>
            <Title Title={"Personal Details"} />
            <InputText Title={"Email Address"}/>
            <InputText Title={"Password"} Password={true}/>
            <ChangePassword/>
            <View style={{marginVertical: 30, borderWidth: 0.4, marginHorizontal:15, borderColor:'#C4C4C4'}}></View>
            <Title Title={"Business Address Details"} />
            <InputText Title={"Pincode"} Number={'numeric'}/>
            <InputText Title={"Address"}/>
            <InputText Title={"City"}/>
            <InputText Title={"State"}/>
            <InputText Title={"Country"}/>
            <View style={{marginVertical: 30, borderWidth: 0.4, marginHorizontal:15, borderColor:'#C4C4C4'}}></View>
            <Title Title={"Bank Account Details"} />
            <InputText Title={"Bank Account Number"}/>
            <InputText Title={"Account Holder’s Name"}/>
            <InputText Title={"IFSC Code"}/>
            <Button Title={"Save"}/>

        </ScrollView>
    )
}

export default Profile