import { View } from 'react-native'
import React, { useEffect } from 'react'
import { Background, Flex } from '../../infrastructure/theme'
import Logo from '../../components/Logo/Logo'
import { useNavigate } from 'react-router-native'

/**
 * @author ehernandez
 * @description screen for show logo and redirect to categories screen
 * @returns
 */
export default function SplashScreen () {
  const navigate = useNavigate()

  /**
   * @author ehernandez
   * @description redirect to categories screen.
   * set timeout for show logo
   */
  useEffect(() => {
    setTimeout(() => {
      navigate('categories')
    }, 2000)
  }, [])
  return (
    <View style={[Background.secondary, Flex.flex1, Flex.justifyCenter, Flex.itemsCenter]}>
        <Logo width={300} height={300} />
    </View>
  )
}
