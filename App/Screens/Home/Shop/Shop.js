import React from 'react'
import Header2 from '../../Component/Header2/Header2'
import { ScrollView, StyleSheet, View } from 'react-native'
import ProductImage from '../../Component/ShopComponent/ProductImage/ProductImage'
import Size from '../../Component/ShopComponent/Size/Size'
import Description from '../../Component/ShopComponent/Description/Description'
import Tags from '../../Component/ShopComponent/Tag/Tags'
import BuyNow from '../../Component/ShopComponent/BuyNow/BuyNow'
import AddCart from '../../Component/ShopComponent/AddCart/AddCart'
import Timer from '../../Component/ShopComponent/Timer/Timer'
import ProductName from '../../Component/ProductName/ProductName'
import Filter from '../../Component/Filter/Filter'
import Compare from '../../Component/ShopComponent/Compare/Compare'

const Shop = () => {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Header2 ImageLeft={require("../../Assest/BackIcon.png")} ImageRight={require("../../Assest/cartIcon.png")} />
          <ProductImage />
          <Size />
          <Description />
          <Tags />
          <View style={{ flexDirection: 'row', columnGap: 20, marginVertical: 20, marginLeft: 11 }}>
            <AddCart />
            <BuyNow />
          </View>
          <Timer />
          <View style={{ flexDirection: 'row', columnGap: 5, marginTop: 20 }}>
            <Compare Title={"View Similar"} Image={require("../../Assest/viewIcon.png")} />
            <Compare Title={"Add to Compare"} Image={require("../../Assest/compareIcon.png")} />
          </View>
          <Filter Title={"Similar to 2822+ Iteams"} />
        </View>
        <View style={{paddingRight:100}}>
          <ProductName />
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    backgroundColor: 'white',

  }
})

export default Shop