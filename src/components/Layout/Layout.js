import React from 'react'
import PropTypes from 'prop-types'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Background, Border, Flex, Padding, Position, zIndex } from '../../infrastructure/theme'
import Logo from '../Logo'
import { useNavigate } from 'react-router-native'

const Layout = ({ children, style, reference, navigation }) => {
  const navigate = useNavigate()
  return <>

    <View style={[Position.absolute, zIndex.z10]}>
      <View style={[styles.logo, Padding.px10]}>
        <Logo mode='dark' width={100} height={80} />
      </View>
      <Pressable
        onPress={() => navigate(-1)}
        style={[
          styles.btnBack,
          Border.wbottom1,
          Border.wright1,
          Border.wtop1,
          Border.gray200,
          Background.white,
          Flex.itemsCenter,
          Flex.justifyCenter
        ]}
      >
        <Image resizeMode='contain' style={{ width: 20, height: 30 }} source={require('../../assets/img/ic_arrow_back.png')} />
      </Pressable>

    </View>
    {children}
  </>
}

const styles = StyleSheet.create({
  btnBack: {
    height: 70,
    width: 70,
    borderTopEndRadius: 40,
    borderBottomEndRadius: 40
  },
  logo: {
    zIndex: 10
  }
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.array,
  reference: PropTypes.object,
  navigation: PropTypes.object
}

export default Layout
