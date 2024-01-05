import React, { useEffect } from 'react';
import { StatusBar } from 'react-native-basic-elements'
import { ScrollView } from 'react-native'
import Header from '../../../Components/CommonComponent/Header/Header';
import Search from '../../../Components/CommonComponent/Search/Search';
import Filter from '../../../Components/CommonComponent/Filter/Filter';
import Category from '../../../Components/App/Dashboard/Category/Category';
import Discount from '../../../Components/App/Dashboard/Discount/Discount';
import DealOfTheDay from '../../../Components/App/Dashboard/DealOfTheDay/DealOfTheDay';
import Product from '../../../Components/App/Dashboard/Product/Product';
import SpecialOffer from '../../../Components/App/Dashboard/SpecialOffer/SpecialOffer';
import Offer from '../../../Components/App/Dashboard/Offer/Offer';
import ListOfProduct from '../../../Components/App/Dashboard/ListOfProduct/ListOfProduct';
import SummerSale from '../../../Components/App/Dashboard/SummerSale/SummerSale';
import Sponsered from '../../../Components/App/Dashboard/Sponsered/Sponsered';
import ProductService from '../../../Services/Product';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../Redux/Thunk/Product';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { addCartData } = useSelector(state => state.Product);
  useEffect(() => {
    dispatch(addCart(addCartData));
  }, [dispatch]);
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 10
      }}
    >
      <StatusBar backgroundColor={'white'} />
      <Header />
      <Search />
      <Filter Title={"All Featured"} />
      <Category />
      <Discount />
      <DealOfTheDay BackGroundColor={'#4392F9'} Title={"Deal of the Day"} Icon={require("../../../Assets/Image/App/Dashboard/DealOfTheDay/watchIcon.png")} Timer={"22h 55m 20s remaining"} />
      <Product />
      <SpecialOffer />
      <Offer />
      <DealOfTheDay BackGroundColor={"#FD6E87"} Title={"Trending Products"} Icon={require("../../../Assets/Image/App/Dashboard/DealOfTheDay/calenderIcon.png")} Timer={"Last Date 29/02/22"} />
      <ListOfProduct />
      <SummerSale />
      <Sponsered />
    </ScrollView>
  )
}

export default Dashboard