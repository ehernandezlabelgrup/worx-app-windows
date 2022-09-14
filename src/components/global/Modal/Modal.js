import { View, Modal as NativeModal } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../../../infrastructure/theme'

export default function Modal ({ children, onRequestClose, visible }) {
  return (
    <NativeModal transparent visible={visible} onRequestClose={onRequestClose}>
      <View
        style={[
          { backgroundColor: 'rgba(0,0,0,.5)' },
          Flex.flex1,
          Flex.justifyCenter,
          Flex.itemsCenter
        ]}>
        {children}
      </View>
    </NativeModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  visible: PropTypes.bool
}
