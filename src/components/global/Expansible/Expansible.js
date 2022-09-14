import { View, Pressable } from 'react-native'
import React, { useState } from 'react'
import Paragraphs from '../Paragraphs'
import { Border, Flex, Padding } from '../../../infrastructure/theme'
import Icon from '../Icon'
import { colors } from '../../../infrastructure/theme/color'
import PropTypes from 'prop-types'
export default function Expansible ({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <Pressable onPress={() => setOpen(!open)} style={[Border.gray100, Border.wtop1, Border.wleft1, Border.wright1]}>
        <View style={[Border.wbottom1, Border.gray100, Padding.px10, Padding.py10, Flex.row]}>
            <Paragraphs style={[Flex.flex1]} weight='bold' size='lg'>
                {title}
            </Paragraphs>
            <View style={[Padding.px10, { marginTop: 2 }]}>
                <Icon iconFamily='Ionicons' name='chevron-down-outline' size={17} color={colors.secondary} />
            </View>
        </View>
      {open && <View style={[Padding.py10, Padding.px20, Border.gray100, Border.wbottom1]}>
           {children}
        </View>}
    </Pressable>
  )
}

Expansible.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any

}
