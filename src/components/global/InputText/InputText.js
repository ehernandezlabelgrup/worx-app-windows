import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Paragraphs from '../Paragraphs'
import {
  Background,
  Border,
  Color,
  Flex,
  Margin,
  Padding,
  Position
} from '../../../infrastructure/theme'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { colors } from '../../../infrastructure/theme/color'
import MaskInput from 'react-native-mask-input'

export default function InputText ({
  label,
  background,
  secureTextEntry,
  onBlur,
  onChange,
  placeholder,
  keyboardType,
  testID,
  value,
  error,
  autoCapitalize,
  numberOfLines,
  description,
  mask
}) {
  const [secure, setSecure] = React.useState(secureTextEntry)
  return (
    <View style={[Background[background]]}>
      <View style={[Border.gray300, Border.width1, Flex.row, { height: numberOfLines ? numberOfLines * 50 : 50 }]}>
        <Paragraphs
          style={[
            Background.white,
            Position.absolute,
            styles.label,
            Padding.px10
          ]}>
          {label}
        </Paragraphs>

        <MaskInput
          mask={mask}
          autoCapitalize={autoCapitalize}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          secureTextEntry={secure}
          keyboardType={keyboardType}
          testID={testID}
          style={[Flex.flex1, Padding.px20, numberOfLines && Margin.mt10, Color.black]}
          textAlignVertical='top'
          multiline={!!numberOfLines}
        />
        {
         secureTextEntry && <Pressable style={[Flex.row, Flex.itemsCenter, Flex.justifyCenter, Padding.px10]} onPress={() => setSecure(!secure)}><Icon iconFamily='Ionicons' name={secure ? 'eye' : 'eye-off'} size={25} color={colors.gray[600]} /></Pressable>
        }
      </View>
      <Paragraphs size='xs' style={[Color.primary]}>{description}</Paragraphs>
      <Paragraphs size='sm' style={[styles.error, Color.alert]}>{error}</Paragraphs>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    top: -12,
    left: 10
  },
  error: {
    minHeight: 30
  }
})

InputText.propTypes = {
  label: PropTypes.string,
  background: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'transparent',
    'dark',
    'white'
  ]),
  secureTextEntry: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.oneOf([
    'default',
    'email-address',
    'numeric',
    'phone-pad',
    'ascii-capable',
    'numbers-and-punctuation',
    'url'
  ]),
  testID: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  numberOfLines: PropTypes.number,
  autoCapitalize: PropTypes.oneOf([
    'none',
    'sentences',
    'words',
    'characters'
  ]),
  description: PropTypes.string,
  mask: PropTypes.string

}

InputText.defaultProps = {
  background: 'transparent',
  autoCapitalize: 'sentences'
}
