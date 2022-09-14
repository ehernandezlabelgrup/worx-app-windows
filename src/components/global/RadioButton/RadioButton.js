import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Background, Border, Color, Flex, Height, Padding, Width } from '../../../infrastructure/theme'
import PropTypes from 'prop-types'
import Paragraphs from '../Paragraphs'

export default function RadioButton ({ label, checked, onChange, testID }) {
  return (
    <Pressable testID={testID} style={[Flex.row, Padding.py10]} onPress={onChange}>
        <View style={[styles.ball, Border.primary, Border.rfull, Border.width1]}>
            {checked && <View style={[Background.primary, Height.full, Width.full, Border.rfull]} />}
        </View>
        {
            label && <Paragraphs style={[Color.primary, Padding.px10]}>{label}</Paragraphs>
        }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  ball: {
    width: 20,
    height: 20,
    borderRadius: 100,
    padding: 2
  }
})

RadioButton.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  testID: PropTypes.string
}
