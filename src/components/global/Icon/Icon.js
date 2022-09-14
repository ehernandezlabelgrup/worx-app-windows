import React from 'react'
import PropTypes from 'prop-types'
import IconMa from 'react-native-vector-icons/MaterialIcons'
import IconMac from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIo from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Foundation from 'react-native-vector-icons/Foundation'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Icon = ({ iconFamily, color, size, name }) => {
  switch (iconFamily) {
    case 'MaterialIcons':
      return <IconMa size={size} color={color} name={name} />
    case 'MaterialCommunityIcons':
      return <IconMac size={size} color={color} name={name} />
    case 'Ionicons':
      return <IconIo size={size} color={color} name={name} />
    case 'AntDesign':
      return <AntDesign size={size} color={color} name={name} />
    case 'Feather':
      return <Feather size={size} color={color} name={name} />
    case 'Foundation':
      return <Foundation size={size} color={color} name={name} />
    case 'Entypo':
      return <Entypo size={size} color={color} name={name} />
    case 'SimpleLineIcons':
      return <SimpleLineIcons size={size} color={color} name={name} />
    case 'FontAwesome':
      return <FontAwesome size={size} color={color} name={name} />
    case 'Fontisto':
      return <Fontisto size={size} color={color} name={name} />
    default:
      return null
  }
}

Icon.propTypes = {
  iconFamily: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired

}

export default Icon
