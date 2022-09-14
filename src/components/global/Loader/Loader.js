import { View, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../../../infrastructure/theme/color'
import { Flex } from '../../../infrastructure/theme'

export default function Loader () {
  return (
    <View style={[styles.container, Flex.itemsCenter, Flex.justifyCenter]}>
      <ActivityIndicator color={colors.primary} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 6
  }
})
