/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import { Image, Pressable, useWindowDimensions, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import Paragraphs from '../global/Paragraphs/Paraghraps'
import { Border, Color, Flex, Height, Padding, text, Width } from '../../infrastructure/theme'
import ItemFadeAnimation from '../ItemFadeAnimation'

const ProductMiniature = ({
  length,
  compara,
  idx,
  images,
  compare,
  reference,
  id,
  accesories,
  category,
  price,
  description,
  description_short,
  ean13,
  name, upc, features,
  especifications
}) => {
  const cover = images.find(i => i.cover === '1')
  const navigate = useNavigate()
  const { width, height } = useWindowDimensions()
  const handleSelect = () => {
    navigate(`/product/${id}`, {
      state: {
        compare: compara || compare,
        images,
        ean13,
        reference,
        id,
        accesories,
        category,
        price,
        description,
        description_short,
        name,
        upc,
        features,
        especifications
      }
    })
  }
  if (!cover) return null

  const isLast = length - 1 === idx ? 1 : 0

  return <ItemFadeAnimation delay={idx}>
    <Pressable
      onPress={handleSelect}
      style={[
        {
          width: (width / 4),
          height: height / (length > 4 ? 2 : 1)
        },
        Border.wbottom1,
        Border.wleft1,
        Border.gray100,
        {
          borderRightWidth: isLast
        }
      ]}>
      <Image
      resizeMode='center'
      source={cover ? cover.url : ''}
      style={[
        Width.full,
        Height.full,
        Flex.flex1]}
      />
      <View style={[Padding.px30, Padding.py30]}>
        <Paragraphs style={[text.center, Color.gray600]} size='xl3' weight={'univers'}>{reference}</Paragraphs>
        <Paragraphs style={[text.center, Color.gray800]} uppercase weight={'univers'} size='lg' >{name}</Paragraphs>
      </View>
    </Pressable>
  </ItemFadeAnimation>
}

ProductMiniature.propTypes = {
  images: PropTypes.array,
  reference: PropTypes.string,
  id: PropTypes.number,
  accesories: PropTypes.array,
  category: PropTypes.string,
  price: PropTypes.number,
  compare: PropTypes.number,
  description: PropTypes.string,
  description_short: PropTypes.string,
  name: PropTypes.string,
  upc: PropTypes.string,
  features: PropTypes.array,
  especifications: PropTypes.array,
  idx: PropTypes.number,
  length: PropTypes.number,
  compara: PropTypes.string,
  ean13: PropTypes.string

}

ProductMiniature.defaultProps = {
  images: []
}

export default ProductMiniature
