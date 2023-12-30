import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import Header2 from '../../../Components/CommonComponent/Header2/Header2'
import ProductImage from '../../../Components/App/Shop/ProductImage/ProductImage'
import Size from '../../../Components/App/Shop/Size/Size'
import Description from '../../../Components/App/Shop/Description/Description'
import Tags from '../../../Components/App/Shop/Tags/Tags'
import BuyNow from '../../../Components/App/Shop/BuyNow/BuyNow'
import AddCart from '../../../Components/App/Shop/AddCart/AddCart'
import Timer from '../../../Components/App/Shop/Timer/Timer'
import Compare from '../../../Components/App/Shop/Compare/Compare'
import Filter from '../../../Components/App/Shop/Filter/Filter'
import ProductName from '../../../Components/App/Shop/ProductName/ProductName'

const Shop = () => {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Header2 ImageLeft={require("../../../Assets/Image/App/Shop/Header2/BackIcon.png")} ImageRight={require("../../../Assets/Image/App/Shop/Header2/cartIcon.png")} />
          <ProductImage/>
          <Size/>
          <Description/>
          <Tags/>
          <View style={{ flexDirection: 'row', columnGap: 20, marginVertical: 20, marginLeft: 11 }}>
            <AddCart/>
            <BuyNow/>
          </View>
          <Timer/>
          <View style={{ flexDirection: 'row', columnGap: 5, marginTop: 20 }}>
            <Compare Title={"View Similar"} Image={require("../../../Assets/Image/App/Shop/Compare/viewIcon.png")} />
            <Compare Title={"Add to Compare"} Image={require("../../../Assets/Image/App/Shop/Compare/compareIcon.png")} />
          </View>
          <Filter  Title={"Similar to 2822+ Iteams"} />
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