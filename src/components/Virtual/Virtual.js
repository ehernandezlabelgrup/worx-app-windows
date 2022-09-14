/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import { Image, ImageBackground, Pressable, useWindowDimensions, View } from 'react-native'
import Paragraphs from '../global/Paragraphs/Paraghraps'
import { useNavigate } from 'react-router-native'
import { Background, Border, Color, Flex, Height, Opacity, Padding, Position, text, Width } from '../../infrastructure/theme'

const Virtual = ({ name, images, url, id, description_short, idx }) => {
  const navigate = useNavigate()
  const { width, height } = useWindowDimensions()
  const handleOpen = () => {
    navigate(`/productvideo/${id}`, {
      state: {
        name,
        description_short,
        id,
        url
      }
    })
  }
  const cover = images.find(i => i.cover === '1')
  return (

    <ImageBackground
      source={cover ? cover?.url : ''}
      resizeMode='cover'
      style={[{
        width: width / 3,
        height: height / 2
      },
      Flex.itemsCenter, Flex.justifyCenter]}
    >
      <View style={[
        Position.absolute,
        Height.full,
        Width.full,
        Background.black,
        Opacity.o50,
        Position.left0,
        Position.top0
      ]} />
      <Pressable
        onPress={handleOpen}
        style={[
          Position.relative,
          Padding.px30,
          Padding.py30,
          Height.full,
          Width.full,
          Flex.justifyCenter,
          Flex.itemsCenter
        ]}>
        <View
          style={[
            Flex.flex1,
            Flex.justifyCenter,
            Flex.itemsCenter
          ]}>
          <View
            size='xl2'
            uppercase
            weight={'univers'}
            style={[{ height: 60, width: 60, paddingLeft: 4 }, Background.primary, Border.rfull,
              Flex.itemsCenter,
              Flex.justifyCenter,
              Border.width2,
              Border.white
            ]}>
            <Image source={require('../../assets/img/ic_play.png')} resizeMode='contain' style={[{ width: 20, height: 30 }]} />
          </View>
        </View>
        <Paragraphs
          size='xl'
          uppercase
          weight={'univers'}
          style={[Color.white, text.center]}>
          {name}
        </Paragraphs>
      </Pressable>
    </ImageBackground>

  )
}

Virtual.propTypes = {
  name: PropTypes.string,
  images: PropTypes.array,
  url: PropTypes.number,
  id: PropTypes.number,
  description: PropTypes.string,
  description_short: PropTypes.string,
  idx: PropTypes.number,
  length: PropTypes.number,
  video_blob: PropTypes.object

}

Virtual.defaultProps = {
  imags: []
}

export default Virtual
