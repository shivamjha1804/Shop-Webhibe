import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../../../Components/CommonComponent/Header/Header'
import Search from '../../../Components/CommonComponent/Search/Search'
import Filter from '../../../Components/CommonComponent/Filter/Filter'
import ProductName from '../../../Components/Auth/TrendingProduct/ProductName/ProductName'

const TrendingProduct = () => {
  return (
    <View style={styles.Container}>
        <ScrollView >
        <View style={styles.subContainer}>
          <Header/>
          <Search/>
          <Filter Title={"52,082+ Iteams"}/>
        </View>
        <ProductName/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{

    backgroundColor:'white'
  },
  subContainer:{
    paddingHorizontal:10
  }
})

export default TrendingProduct