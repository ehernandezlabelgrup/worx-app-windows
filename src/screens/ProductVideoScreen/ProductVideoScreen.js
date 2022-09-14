import { Pressable, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Background, Color, Flex, Padding, Position, zIndex } from '../../infrastructure/theme'
import Video from 'react-native-video'
import { useLocation, useNavigate, useParams } from 'react-router-native'
import Paragraphs from '../../components/global/Paragraphs/Paraghraps'

/**
 * @author ehernandez
 * @description page to show video from product o for inactive app
 */
export default function ProductVideoScreen () {
  // CUSTOM HOOKS
  const params = useParams()
  const location = useLocation()
  const [product, setProduct] = useState(null)
  const navigate = useNavigate()

  /**
   * @author ehernandez
   * @descrpition the datas in local, if has id from params set producto width data from product
   * if have not id set product width two data url (url for video inactive) and loop to true
   */
  useLayoutEffect(() => {
    if (params?.id) {
      setProduct({
        loop: false,
        url: location?.state?.url,
        name: location?.state?.name,
        description_short: location?.state?.description_short
      })
    } else {
      setProduct({
        url: 'ms-appx:///main-video.mp4', // -- video for inactive app
        loop: true
      })
    }
  }, [])
  return (
    <Pressable
      onPress={() =>
        product?.loop // if product has loop to true redirect to categories screen if not to back screen
          ? navigate('/categories', { replace: true })
          : navigate(-1)
        }
      style={[Flex.flex1, Background.black]}>
      {product?.name && (
        <View
          style={[Position.absolute,
            {
              backgroundColor: 'rgba(0,0,0,.4)'
            },
            zIndex.z10,
            Position.left10,
            Position.top10,
            Padding.px30,
            Padding.py30]}>
          <Paragraphs
            style={[Color.white]}
            className="tw-text-white tw-mb-2"
            italic
             weight='bold'
              size={'xl'}>{product?.name}</Paragraphs>
          <Paragraphs
            style={[Color.white]}
            className="tw-text-white"
            italic size={'sm'}>{product?.description_short}</Paragraphs>
        </View>
      )}
      {product && <Video
        onError={() => navigate('categories', { replace: true })}
        resizeMode='contain'
        onVideoError={() => navigate('categories', { replace: true })}
        source={{
          uri: product?.url
        }}
        style={[Flex.flex1]}
        onEnd={() =>
          product?.loop
            ? navigate('categories', { replace: true })
            : navigate(-1)}
        repeat={product?.loop}
      />}
    </Pressable>
  )
}
