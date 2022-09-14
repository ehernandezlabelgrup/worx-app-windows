import { View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Paragraphs from '../../components/global/Paragraphs/Paraghraps'
import Sidebar from '../../components/Sidebar/Sidebar'
import { CATEGORIES } from '../../infrastructure/constants/categories'
import {
  Background,
  Border,
  Color,
  Flex,
  Height,
  Opacity,
  Padding,
  Position,
  Width
} from '../../infrastructure/theme'
import { useNavigate } from 'react-router-native'

/**
 * @author ehernandez
 * @description screen for show categories. show categories for constant
 */
export default function CategoriesScreen () {
  const navigate = useNavigate()

  /**
 * @author ehernandez
 * @param {object} category
 * @param {object} category.id id category pressed. Required
 */
  const onClickCategory = category => {
    navigate('/category/' + category.id, { category })
  }

  return (
        <ImageBackground
            source={require('../../assets/img/splash.jpg')}
            resizeMode='cover'
            style={[
              Height.full,
              Width.full,
              Flex.flex1
            ]}>
            <View
                style={[
                  Background.black,
                  Opacity.o70,
                  Height.full,
                  Width.full,
                  Position.left0,
                  Position.absolute,
                  Position.left0,
                  Position.top0,
                  { zIndex: 0 }
                ]}
            />
            <Sidebar />
            <View style={[
              Padding.ph30,
              Padding.py30,
              Flex.flex1,
              Flex.justifyCenter,
              { paddingLeft: 120, position: 'relative', zIndex: 1 }

            ]}>
                <View className="categories-content tw-px-8 tw-text-white">
                    {CATEGORIES.map((i, index) => (
                        <Pressable
                            key={index}
                            onPress={() => onClickCategory(i)}
                            style={[Flex.row, Padding.py30]}>
                            <View>
                                <Paragraphs
                                    style={[Color.white, Border.width2, Border.primary]}
                                    size="xl6"
                                    weight="univers">
                                    0{index + 1}
                                </Paragraphs>
                                <View style={[Background.primary, { height: 1 }]} />
                            </View>

                            <Paragraphs style={[Color.white]} size="xl6" weight="univers" className="tw-ml-4">
                                {i.name}
                            </Paragraphs>
                        </Pressable>
                    ))}
                </View>
            </View>
        </ImageBackground>
  )
}
