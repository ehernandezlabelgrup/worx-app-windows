import { Pressable, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Paragraphs from '../../Paragraphs'
import { Color, Flex, Height, Padding, text, Width } from '../../../../infrastructure/theme'
import PropTypes from 'prop-types'
import Icon from '../../Icon/Icon'
import { colors } from '../../../../infrastructure/theme/color'
const HEADER_LEFT_WIDTH = 100

/**
 *
 * @param {boolean} canGoBack
 * @param {function} navigation
 * @param {string} tintColor example rgb(255, 255, 255)
 * @returns
 */
export default function HeaderRight ({ navigation, skip, drawer }) {
  const { t } = useTranslation()
  return (
    <View testID='header-right' style={[{ width: HEADER_LEFT_WIDTH }, Height.full, Flex.row]}>
      {
        skip && <Pressable onPress={() => navigation?.navigate('EntranceScreen')} style={[Height.full, Width.full, Flex.justifyCenter, Padding.px10]}>
        <Paragraphs style={[Color.white, text.right]}>{t('Saltar')}</Paragraphs>
      </Pressable>
      }
      {
        drawer && <Pressable onPress={() => navigation.openDrawer() } style={[Height.full, Width.full, Flex.itemsEnd, Padding.px10]}>
          <Icon iconFamily='Ionicons' name='menu' color={colors.primary} size={30} />
        </Pressable>
      }

    </View>
  )
}

HeaderRight.propTypes = {
  skip: PropTypes.bool,
  navigation: PropTypes.object,
  drawer: PropTypes.bool
}
