import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { Color, fontFamily, fontSize, text } from '../../../infrastructure/theme'

/**
 * @author ehernandez
 * @description component for wrapper texts
 * @param {node} children
 * @param {array} style custom styles for componente
 * @param {string} size size text. default base
 * @param {string} weight font weight
 * @param {bool} uppercase
 * @param {function} onPress
 * @param {number} numberOfLines
 */
export default function Paragraphs ({
  children,
  style,
  size,
  weight,
  uppercase,
  onPress,
  numberOfLines
}) {
  return (
    <Text
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={[
        Color.black,
        ...style,
        fontSize[size],
        fontFamily[weight],
        uppercase && text.uppercase,
        { marginTop: 0 }
      ]}>
      {children}
    </Text>
  )
}

Paragraphs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.array,
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    'xl2',
    'xl3',
    'xl4',
    'xl5',
    'xl6',
    'xl7',
    'xl8',
    'xl9',
    'xl10',
    'xl11',
    'xl12',
    'xl13',
    'xl14',
    'xl15',
    'xl16',
    'xl17',
    'xl18',
    'xl19',
    'xl20',
    'xl21',
    'xl22',
    'xl23',
    'xl24',
    'xl25'
  ]),
  weight: PropTypes.oneOf(['regular', 'bold', 'semibold', 'extrabold', 'medium', 'light', 'univers', 'italic']),
  uppercase: PropTypes.bool,
  onPress: PropTypes.func,
  numberOfLines: PropTypes.number
}

Paragraphs.defaultProps = {
  style: [],
  size: 'base',
  weight: 'regular'
}
