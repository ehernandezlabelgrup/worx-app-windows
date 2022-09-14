import { View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../../../../infrastructure/theme'

export const HEADER_HEIGHT = 50
export default function HeaderConainer ({ children }) {
  return (
    <View style={[{ height: HEADER_HEIGHT }, Flex.row, Flex.justifyBetween, Flex.itemsCenter]}>
     {children}
    </View>
  )
}

HeaderConainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
