import { Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { Color } from '../../../../infrastructure/theme'
import Paragraphs from '../../Paragraphs'
export default function HeaderTitle ({ title, onPress }) {
  return (
    <Pressable onPress={onPress} testID='header-center'>
      <Paragraphs style={[Color.white]}>{title}</Paragraphs>
    </Pressable>
  )
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
}
