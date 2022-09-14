import React from 'react'
import Logo from '../Logo'
import { Pressable, View } from 'react-native'
import { Background, Border, Flex, Height, Padding, Width } from '../../infrastructure/theme'
import { useNavigate } from 'react-router-native'
import PropTypes from 'prop-types'

const Header = ({ navigation }) => {
  const navigate = useNavigate()
  return (
        <View style={[Width.full, Background.transparent, { height: 60 }]}
        >
            <View style={[Flex.itemsCenter, Padding.px30, Height.full]}
            >
                <Logo size={100} mode='dark' />
            </View>
            <Pressable onPress={() => navigate(-1)}
                style={[
                  { height: 80, width: 80, borderTopEndRadius: 40, borderBottomEndRadius: 40 },
                  Border.gray300,
                  Border.width1,
                  Flex.itemsCenter, Flex.justifyCenter, Padding.px10, Padding.py10]}>
            </Pressable>
        </View>
  )
}

Header.propTypes = {
  navigation: PropTypes.object
}

export default Header
