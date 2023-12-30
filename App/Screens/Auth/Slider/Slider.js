import React, { useRef } from 'react'
import { StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import SliderContent from '../../../Components/Auth/Slider/SliderContent'
import NavigationService from '../../../Services/Navigation'


const Slider = () => {
    const swiperRef = useRef(null);
    return (
        <Swiper scrollEnabled={false} ref={swiperRef} style={styles.wrapper}>
            <SliderContent onNext={() => {
                swiperRef.current.scrollBy(1, true)
            }} num={1} Image={require("../../../Assets/Image/Auth/Slider/Image1.png")} Heading={"Choose Products"} Text={"Amet minim mollit non deserunt ullamco est \n sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."} Button1={''} Button2={'Next'} />

            <SliderContent onPrev={() => {
                swiperRef.current.scrollBy(-1, true)
            }} onNext={() => {
                swiperRef.current.scrollBy(1, true)
            }} num={2} Image={require("../../../Assets/Image/Auth/Slider/Image2.png")} Heading={"Make Payment"} Text={"Amet minim mollit non deserunt ullamco est \n sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."} Button1={'Prev'} Button2={'Next'} />

            <SliderContent onPrev={() => {
                swiperRef.current.scrollBy(-1, true)
            }} onNext={() => {
                NavigationService.navigate("SignIn")
            }} num={3} Image={require("../../../Assets/Image/Auth/Slider/Image3.png")} Heading={"Get Your Order"} Text={"Amet minim mollit non deserunt ullamco est \n sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."} Button1={'Prev'} Button2={'Get Started'} Nav={"login"} />
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
})

export default Slider