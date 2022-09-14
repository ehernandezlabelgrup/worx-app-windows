import { View, Image } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
export default function Logo ({ mode, width, height }) {
  const img = mode === 'white' ? require('../../../assets/img/logo/logo.white.png') : require('../../../assets/img/logo/logo.png')
  return (
    <View >
      <Image source={img} resizeMode='contain' style={{ width, height }} />
    </View>
  )
}

Logo.propTypes = {
  mode: PropTypes.oneOf(['white', 'black']),
  width: PropTypes.number,
  height: PropTypes.number
}
