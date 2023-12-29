import React from 'react';
import { StatusBar } from 'react-native-basic-elements'
import { ScrollView } from 'react-native'
import Header from '../../../Components/CommonComponent/Header/Header';
import Search from '../../../Components/CommonComponent/Search/Search';
import Filter from '../../../Components/CommonComponent/Filter/Filter';
import Category from '../../../Components/Auth/Dashboard/Category/Category';
import Discount from '../../../Components/Auth/Dashboard/Discount/Discount';
import DealOfTheDay from '../../../Components/Auth/Dashboard/DealOfTheDay/DealOfTheDay';
import Product from '../../../Components/Auth/Dashboard/Product/Product';
import SpecialOffer from '../../../Components/Auth/Dashboard/SpecialOffer/SpecialOffer';
import Offer from '../../../Components/Auth/Dashboard/Offer/Offer';
import ListOfProduct from '../../../Components/Auth/Dashboard/ListOfProduct/ListOfProduct';
import SummerSale from '../../../Components/Auth/Dashboard/SummerSale/SummerSale';
import Sponsered from '../../../Components/Auth/Dashboard/Sponsered/Sponsered';

const Dashboard = () => {
  return (
    <ScrollView 
        style={{
            backgroundColor:'white', 
            paddingHorizontal:10
        }}
        >
        <StatusBar backgroundColor={'white'}/>
        <Header/>
        <Search/>
        <Filter Title={"All Featured"}/>
        <Category/>
        <Discount/>
        <DealOfTheDay BackGroundColor={'#4392F9'} Title={"Deal of the Day"} Icon={require("../../../Assets/Image/App/Dashboard/DealOfTheDay/watchIcon.png")} Timer={"22h 55m 20s remaining"}/>
        <Product/>
        <SpecialOffer/>
        <Offer/>
        <DealOfTheDay BackGroundColor={"#FD6E87"} Title={"Trending Products"} Icon={require("../../../Assets/Image/App/Dashboard/DealOfTheDay/calenderIcon.png")} Timer={"Last Date 29/02/22"}/>
        <ListOfProduct/>
        <SummerSale/>
        <Sponsered/>
    </ScrollView>
  )
}

export default Dashboard