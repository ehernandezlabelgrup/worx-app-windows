import { Image, Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
const HEADER_LEFT_WIDTH = 100
export default function HeaderLeft ({ navigation }) {
  return (
    <Pressable onPress={() => navigation.goBack()} testID='header-left' style={[{ width: HEADER_LEFT_WIDTH }]}>
        <Image source={require('../../../../assets/img/icons_drawer/ic_back.png')} style={{ width: 12, height: 18 }} />
    </Pressable>
  )
}

HeaderLeft.propTypes = {
  navigation: PropTypes.object
}
