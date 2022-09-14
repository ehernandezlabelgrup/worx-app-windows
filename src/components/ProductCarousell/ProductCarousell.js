import { FlatList, Image, Pressable, useWindowDimensions, View } from 'react-native'
import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Background, Border, Color, Flex, Height, Margin, Padding, Position, Width, zIndex } from '../../infrastructure/theme'
import { Flyout } from 'react-native-windows'
import Paragraphs from '../global/Paragraphs/Paraghraps'

/**
 * @author ehernandez
 *  @description array images from carousell
 * @param {array} images
 */
export default function ProductCarousell ({ images }) {
  // states
  const [currentImage, setCurrentImage] = useState()
  const [layoutSizes, setLayoutSizes] = React.useState(null)

  // ref
  const flatListRef = useRef()

  // customs hook
  const { width, height } = useWindowDimensions()

  /**
   * @author ehernandez
   * @description navigate to image from index thumnb selected
   * @param {number} index index of thumb clicked
   */
  const onThumbnailClick = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index })
  }
  if (!images) return null
  return (
    <View style={[Height.full, Width.full]}
      onLayout={(e) => {
        setLayoutSizes(e.nativeEvent.layout)
      }}
    >
      <Flyout
        onDismiss={() => setCurrentImage(null)}
        isOpen={!!currentImage} placement='full'
      >
        <Pressable
          style={[Background.white, { width, height }, Flex.justifyCenter, Flex.itemsCenter]}
          onPress={() => setCurrentImage(null)}>
          <Image resizeMode='contain' source={currentImage?.url} style={[Background.white, Flex.flex1, { maxWidth: width, maxHeight: height }]} />

          <View style={[Position.absolute, Position.left20, Position.bottom0, zIndex.z50]}>
            <Paragraphs size='xl' style={[Color.black]} uppercase weight={'bold'}>Toque la pantalla para cerrar</Paragraphs>
          </View>
        </Pressable>
      </Flyout>
      <FlatList
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        ref={flatListRef}
        data={images}
        renderItem={({ item, index }) => (
          layoutSizes && <Pressable
            onPress={() => setCurrentImage(item)}
            key={index} style={[
              {
                height: layoutSizes?.height - 30,
                width: layoutSizes?.width
              },
              Padding.py15
            ]}>
            <Image resizeMode='contain' source={item?.url} style={[{ height: layoutSizes?.height - 30, width: layoutSizes?.width }]} />
          </Pressable>
        )}
      />

      <View style={[
        Flex.row,
        Flex.wrap,
        Flex.justifyCenter
      ]}>
        {
          images?.map((image, index) => (
            <Pressable
              onPress={() => onThumbnailClick(index)}
              key={index}
              style={[
                {
                  height: 70,
                  width: 70,
                  overflow: 'hidden',
                  padding: 3
                },
                Border.width1,
                Border.gray100,
                Border.r2,
                Margin.ml10,
                Margin.mb10,
                Flex.itemsCenter,
                Flex.justifyCenter

              ]}>
              <Image
              resizeMode='contain'
              source={image?.url}
              style={[
                {
                  height: 70 - 12,
                  width: 70 - 12
                }
              ]} />
            </Pressable>
          ))
        }
      </View>
    </View>
  )
}

ProductCarousell.propTypes = {
  images: PropTypes.array
}
