import { View, StyleSheet, Pressable, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Paragraphs from '../Paragraphs'
import {
  Background,
  Border,
  Color,
  Flex,
  Height,
  Margin,
  Padding,
  Position,
  Shadows,
  Width,
  zIndex
} from '../../../infrastructure/theme'
import PropTypes from 'prop-types'
import Icon from '../Icon'
export default function SelectInput ({
  label,
  background,
  secureTextEntry,
  onChange,
  placeholder,
  keyboardType,
  testID,
  value,
  error,
  items
}) {
  const [visible, setVisible] = useState(false)

  const onReguestClose = () => {
    setVisible(false)
  }

  const onPressItem = (item) => {
    onChange(item.id)
    onReguestClose()
  }

  const val = items.find(i => i.id === value)
  return (
    <>
        <Pressable onPress={() => setVisible(true)} style={[Background[background]]}>
      <View style={[Border.gray300, styles.inputContainer, Border.width1, Flex.itemsCenter, Flex.row]}>
        <Paragraphs
          style={[
            Background.white,
            Position.absolute,
            styles.label,
            Padding.px10
          ]}>
          {label}
        </Paragraphs>
        <Paragraphs
          size='xl'
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          testID={testID}
          style={[Flex.flex1, Padding.px20]}
        >{val?.name}</Paragraphs>
        <View>
          <Icon iconFamily='MaterialIcons' name='arrow-drop-down' size={24} color={Color.gray600} />
        </View>
      </View>
      <Paragraphs style={[styles.error, Color.alert]}>{error}</Paragraphs>
    </Pressable>
    <Modal visible={visible} transparent onReguestClose={onReguestClose}>
      <Pressable onPress={onReguestClose} style={[{ backgroundColor: 'rgba(0,0,0,.4)' }, Flex.flex1, Position.absolute, zIndex.z10, Height.screen, Width.screen]} />
      <View style={[Margin.mx30, zIndex.z30, { maxHeight: 350, marginTop: '50%' }]}>
      <ScrollView style={[Width.full, Background.white, Border.r10, Shadows.base, zIndex.z30]}>
              {
                items?.map((item, index) => (<Pressable onPress={() => onPressItem(item)} key={item.id} style={[Padding.px20, Padding.py20, index && Border.wtop1, Border.gray100]}>
                  <Paragraphs size={'lg'} style={[Color.primary]}>{item.name}</Paragraphs>
                </Pressable>))
              }

            </ScrollView>
      </View>

    </Modal>
    </>

  )
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 50
  },
  label: {
    top: -12,
    left: 10
  },
  error: {
    minHeight: 30
  }
})

SelectInput.propTypes = {
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
  items: PropTypes.array
}

SelectInput.defaultProps = {
  background: 'transparent',
  items: []
}
