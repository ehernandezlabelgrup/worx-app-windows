import { TouchableOpacity } from 'react-native'
import React from 'react'
import Paragraphs from '../Paragraphs'
import PropTypes from 'prop-types'
import { Background, Color, Flex, Padding, text } from '../../../infrastructure/theme'
export default function Button ({ label, color, onPress, uppercase, testID, background, height, style, disabled }) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} testID={testID} style={[Background[background], Padding.px15, Flex.itemsCenter, Flex.row, Flex.justifyCenter, { height: height, opacity: disabled ? 0.6 : 1 }, style]}>
      <Paragraphs uppercase={uppercase} size='lg' style={[Color[color], text.center]}>{label}</Paragraphs>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'white', 'dark']),
  onPress: PropTypes.func,
  style: PropTypes.array,
  uppercase: PropTypes.bool,
  testID: PropTypes.string,
  background: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  height: PropTypes.number,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  height: 55,
  style: []
}
