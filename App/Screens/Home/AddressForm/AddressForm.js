import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'
import { useDispatch } from 'react-redux'
import { RadioButton } from 'react-native-basic-elements'
import { addAddress } from '../../../Redux/Thunk/Address'

const AddressForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState(0)
  const [selected, setSelected] = useState(false);
  const [typeAddress, setTypeAddress] = useState('');
  // const [selected2, setSelected2] = useState(false);
  // const [selected3, setSelected3] = useState(false);

  // let typeAddress = 'Home';

  const addressType = [
    {
      type: "Home"
    },

    {
      type: "Office"
    },

    {
      type: "Other"
    }
  ]

  const addressUpdate = () => {
    if (name === "") {
      alert("Please Enter Name")
      return;
    }
    if (mobile === "") {
      alert("Please Enter Mobile Number")
      return;
    }
    if (address === "") {
      alert("Please Enter Address")
      return;
    }
    if (landmark === "") {
      alert("Please Enter Landmark")
      return;
    }
    if (pincode === "") {
      alert("Please Enter Pincode")
      return;
    }



    let addressData = {
      name: name,
      mobileNo: mobile,
      address: address,
      landmark: landmark,
      pincode: pincode,
      addressType: typeAddress
    }
    // console.log("name:------", name);
    // console.log("mobile number :--------", mobile);
    // console.log("addresss :----------", address);
    // console.log("landmark :---------", landmark);
    // console.log("pincode :------", pincode);
    // console.log("typeAddress-----", typeAddress);
    console.log("addressData------------", addressData);

    dispatch(addAddress(addressData))
    console.log(dispatch(addAddress(addressData)));
  }

  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        flex: 1
      }}
    >
      <Header2 ImageLeft={require("../../../Assets/Image/App/Shop/Header2/BackIcon.png")} ImageRight={require("../../../Assets/Image/App/Shop/Header2/cartIcon.png")} />
      <View
        style={{
          rowGap: 25
        }}
      >

        <Text
          style={{
            color: "#000",
            fontSize: 27,
            fontWeight: '800',
            marginVertical: 15,
          }}
        >
          Address Change Form:
        </Text>
        <View
          style={styles.Row}
        >
          <Text
            style={styles.Label}
          >
            Name:
          </Text>
          <TextInput
            style={styles.Input}
            placeholder='Enter Your Name'
            placeholderTextColor={"grey"}
            value={name}
            onChangeText={(Text) => {
              setName(Text)
            }}
          />
        </View>
        <View
          style={styles.Row}
        >
          <Text
            style={styles.Label}
          >
            Mobile:
          </Text>
          <TextInput
            style={styles.Input}
            placeholder='Enter Your Number'
            placeholderTextColor={"grey"}
            keyboardType='numeric'
            maxLength={10}
            value={mobile}
            onChangeText={(Text) => {
              setMobile(Text)
            }}
          />
        </View>
        <View
          style={styles.Row}
        >
          <Text
            style={styles.Label}
          >
            Address:
          </Text>
          <TextInput
            style={styles.Input}
            placeholder='Enter Your Address'
            placeholderTextColor={"grey"}
            value={address}
            onChangeText={(Text) => {
              setAddress(Text)
            }}
          />
        </View>
        <View
          style={styles.Row}
        >
          <Text
            style={styles.Label}
          >
            Landmark:
          </Text>
          <TextInput
            style={styles.Input}
            placeholder='Enter Your Lankmark'
            placeholderTextColor={"grey"}
            value={landmark}
            onChangeText={(Text) => {
              setLandmark(Text)
            }}
          />
        </View>
        <View
          style={styles.Row}
        >
          <Text
            style={styles.Label}
          >
            Pincode:
          </Text>
          <TextInput
            value={pincode}
            style={styles.Input}
            placeholder='Enter Your Pincode'
            placeholderTextColor={"grey"}
            keyboardType='numeric'
            maxLength={6}
            onChangeText={(val) => {
              setPincode(val)
            }}
          />
        </View>
        <View
          style={{ ...styles.Row, }}
        >
          <Text
            style={styles.Label}
          >
            Type:
          </Text>

          {
            addressType?.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 5,
                    marginRight: 10
                  }}
                >
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 15,
                      fontWeight: '500'
                    }}
                  >
                    {item.type}
                  </Text>
                  <RadioButton
                    selected={index == selected}
                    onChange={(val) => {
                      setSelected(index)
                      setTypeAddress(item.type)
                    }}
                    size={20}
                    containerStyle={{ elevation: 5, backgroundColor: '#fff' }}
                  />
                </View>
              )
            })
          }


        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          alignSelf: 'center',
          marginVertical: 70,
          paddingHorizontal: 40,
          paddingVertical: 15,
          borderRadius: 15,
        }}

        onPress={() => {
          addressUpdate();
        }}
      >
        <Text
          style={styles.Label}
        >
          Update
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    columnGap: 10,
    // flex:1
  },

  Label: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    width: "25%"
  },

  Input: {
    borderRightColor: "#000",
    borderWidth: 1,
    // flex:1,
    padding: 0,
    borderRadius: 5,
    paddingLeft: 10,
    width: "70%",
    color: '#000'
  }
})

export default AddressForm