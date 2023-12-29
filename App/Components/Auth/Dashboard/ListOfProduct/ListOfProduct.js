import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import SubListOfProduct from './SubListOfProduct'

const Detail = [
    {
        Image:require("../../../../Assets/Image/App/Dashboard/ListOfProduct/Product1.png"),
        Title:"IWC Schaffhausen 2021 Pilot's Watch SIHH 2019 44mm", 
        Price:"₹650", 
        CrossedPrice:"₹1599", 
        Percentage:"60% off"
    },
    {
        Image:require("../../../../Assets/Image/App/Dashboard/ListOfProduct/Product1.png"),
        Title:"IWC Schaffhausen 2021 Pilot's Watch SIHH 2019 44mm", 
        Price:"₹650", 
        CrossedPrice:"₹1599", 
        Percentage:"60% off"
    },
    {
        Image:require("../../../../Assets/Image/App/Dashboard/ListOfProduct/Product1.png"),
        Title:"IWC Schaffhausen 2021 Pilot's Watch SIHH 2019 44mm", 
        Price:"₹650", 
        CrossedPrice:"₹1599", 
        Percentage:"60% off"
    },
    {
        Image:require("../../../../Assets/Image/App/Dashboard/ListOfProduct/Product1.png"),
        Title:"IWC Schaffhausen 2021 Pilot's Watch SIHH 2019 44mm", 
        Price:"₹650", 
        CrossedPrice:"₹1599", 
        Percentage:"60% off"
    }
]

const ListOfProduct = () => {
  return (
    <View style={styles.Container}>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
            {
                Detail.map((item, index) => {
                    return(
                        <SubListOfProduct item={item} key={index}/>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
    },

    Container:{
        backgroundColor:'white',
    }
})


export default ListOfProduct