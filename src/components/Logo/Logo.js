import React from 'react'
import PropTypes from 'prop-types'
import { Image, View } from 'react-native'

const Logo = ({ width, height, mode }) => {
  const theme = mode === 'rotate'
    ? require('../../assets/img/worx.black.rotate.png')
    : mode === 'dark'
      ? require('../../assets/img/worx.black.png')
      : require('../../assets/img/worx.white.png')
  return (
    <View className='logo'>
        <Image source={theme} resizeMode='contain' style={{ width, height }} />
    </View>
  )
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  mode: PropTypes.oneOf(['dark', 'light', 'rotate'])
}

export default Logo
