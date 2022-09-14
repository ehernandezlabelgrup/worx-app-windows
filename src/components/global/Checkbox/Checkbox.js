import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Background, Border, Flex, Padding } from '../../../infrastructure/theme'
import Icon from '../Icon'
import PropTypes from 'prop-types'
export default function Checkbox ({ children, checked, onPress }) {
  return (
    <Pressable onPress={onPress} style={[Flex.row]}>
        <View style={[styles.box, Border.primary, Border.width1, checked && Background.primary, Flex.justifyCenter, Flex.itemsCenter]}>
               {checked && <Icon iconFamily='MaterialCommunityIcons' name='check' color='white' size={15} />}
        </View>
        <View style={[Padding.px10]}>
        {children}
        </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    borderRadius: 3
  }
})

Checkbox.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  onPress: PropTypes.func

}
