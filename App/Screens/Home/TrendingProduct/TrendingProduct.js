import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../../../Components/CommonComponent/Header/Header'
import Search from '../../../Components/CommonComponent/Search/Search'
import Filter from '../../../Components/CommonComponent/Filter/Filter'
import ProductName from '../../../Components/App/TrendingProduct/ProductName/ProductName'

const TrendingProduct = () => {
  return (
    <View style={styles.Container}>
          <Header />
          <Search />
        <View style={styles.subContainer}>
          <Filter Title={"52,082+ Iteams"} />
        </View>
        <ProductName />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  subContainer: {
    
  }
})

export default TrendingProduct