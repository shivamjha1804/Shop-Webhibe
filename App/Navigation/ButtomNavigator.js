import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Dashboard from '../Screens/Home/Dashboard/Dashboard';
import TrendingProduct from '../Screens/Home/TrendingProduct/TrendingProduct';
import Shop from '../Screens/Home/Shop/Shop';
import Search from '../Screens/Home/Search/Search';
import Setting from '../Screens/Home/Setting/Setting';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

const ButtomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name='Home'
        component={Dashboard}
        options={{
          tabBarIcon:({focused}) => {
            return(
              <View style={{alignItems:"center", justifyContent:"center"}}>
                <Icon name='home' size={24} color={focused?'#EB3030':'black'}/>
                <Text style={{fontSize:12, color:focused? '#EB3030':'black'}}>
                  Home
                </Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen 
        name='TrendingProduct'
        component={TrendingProduct}
        options={{
          tabBarIcon:({focused}) => {
            return(
              <View style={{alignItems:"center", justifyContent:"center"}}>
                <Icon name='heart' size={24} color={focused?'#EB3030':'black'}/>
                <Text style={{fontSize:12, color:focused? '#EB3030':'black'}}>
                Wishlist
                </Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen 
        name='Shop'
        component={Shop}
        options={{
          tabBarIcon:({focused}) => {
            return(
              <View style={{alignItems:"center", justifyContent:"center"}}>
                <Icon name='shopping-cart' size={24} color={focused?'#EB3030':'black'}/>
                <Text style={{fontSize:12, color:focused? '#EB3030':'black'}}>
                Shop
                </Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen 
        name='Search'
        component={Search}
        options={{
          tabBarIcon:({focused}) => {
            return(
              <View style={{alignItems:"center", justifyContent:"center"}}>
                <Icon name='search' size={24} color={focused?'#EB3030':'black'}/>
                <Text style={{fontSize:12, color:focused? '#EB3030':'black'}}>
                Search
                </Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen 
        name='Setting'
        component={Setting}
        options={{
          tabBarIcon:({focused}) => {
            return(
              <View style={{alignItems:"center", justifyContent:"center"}}>
                <Icon name='cog' size={24} color={focused?'#EB3030':'black'}/>
                <Text style={{fontSize:12, color:focused? '#EB3030':'black'}}>
                Setting
                </Text>
              </View>
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default ButtomNavigator