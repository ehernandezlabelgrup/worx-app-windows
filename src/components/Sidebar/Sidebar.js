import React from 'react'
import { View } from 'react-native'
import { Background, Height, Padding, Position } from '../../infrastructure/theme'
import Logo from '../Logo'

const Sidebar = () => {
  return (
    <View style={[
      Background.white,
      Position.absolute,
      Position.left0,
      Position.top0,
      Height.full,
      Padding.py10,
      { width: 60 }
    ]}
          >
     <View className='tw-py-6'>
     <Logo width={60} height={80} mode='rotate' />
    </View>
         </View>
  )
}

Sidebar.propTypes = {}

export default Sidebar
