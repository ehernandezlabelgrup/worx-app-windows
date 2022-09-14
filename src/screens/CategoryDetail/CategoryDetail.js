import { View, Image, Pressable, useWindowDimensions, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Paragraphs from '../../components/global/Paragraphs/Paraghraps'
import { useNavigate, useParams } from 'react-router-native'
import { Background, Flex, Margin, Padding, Position, text, zIndex } from '../../infrastructure/theme'
import { CATEGORIES } from '../../infrastructure/constants/categories'
import Layout from '../../components/Layout/Layout'
import ItemFadeAnimation from '../../components/ItemFadeAnimation'

const SIZE_BUTTONS_SCROLL = 60
const W_ARROW_BUTTON_SCROLL = 11
const H_ARROW_BUTTON_SCROLL = 16

/**
 * @author ehernandez
 * @description screen for show subcategories. show subcategories
 */
const CategoryDetail = () => {
  // STATES
  const [category, setCategory] = useState(null)

  // REF
  const scrollRef = useRef()

  // CUSTOM HOOK
  const { id } = useParams()
  const navigate = useNavigate()
  const { width, height } = useWindowDimensions()

  /**
   * @author ehernande
   * @description function when user clcked in any subcategory
   * @param {object} item
   * @param {object} item.id id subcategory to send for params to route. ex. /category/2
   */
  const onClickSubcategory = (item) => {
    navigate(`/category/${id}/${item.id}`, {
      id_category: item.id,
      id_parent: id
    })
  }

  /**
   * @author ehernandez
   * @description when user clicked in arrow to move scroll view
   * only screen has scroll button when items to show is more than 8
   * @param {string} direcction end | top
   */
  const onScroll = (direcction) => {
    switch (direcction) {
      case 'top':
        return scrollRef.current.scrollTo({ y: 0, x: 0 })
      case 'end':
        return scrollRef.current.scrollToEnd()
      default:
        return null
    }
  }

  /**
   * @author ehernandez
   * @description when reder componete get id category parent from id of params route
   * later set category state to iterate for subcategoires
   */
  useEffect(() => {
    const data = CATEGORIES?.find(i => Number(i.id) === Number(id))
    if (data) {
      setCategory(data)
    }
  }, [])

  return (
    <Layout>
      <View scrollEnabled
        style={[Flex.flex1, Background.white]}
      >
        <ScrollView
          ref={scrollRef}
          scrollEnabled
        >
          <View style={[Background.white, Flex.itemsCenter, Flex.row, Flex.wrap, Flex.justifyCenter, Flex.flex1]}>
            {
              category && category?.subcategories?.map((i, idx) =>
                <ItemFadeAnimation key={idx} delay={idx}>
                  <Pressable

                    onPress={() => onClickSubcategory(i)}
                    style={[Flex.col,
                      Flex.itemsCenter,
                      Flex.justifyCenter,
                      Padding.ph20, Padding.py30, { width: width / 4, height: height / (category?.subcategories?.length > 4 ? 2 : 1.5) }]}
                  >
                    <View
                      style={[Flex.justifyCenter]}
                    >
                      <Image
                        initial={{ opacity: 0, translateX: -20 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.4 }}
                        style={[{ maxWidth: 250 }, Flex.flex1]} source={i.miniatura} resizeMode='contain' />
                    </View>
                    <Paragraphs
                      size='xl2'
                      weight='univers'
                      uppercase
                      style={[text.center, text.uppercase]}
                    >
                      {i.name}
                    </Paragraphs>
                  </Pressable>
                </ItemFadeAnimation>
              )
            }

          </View>
        </ScrollView>
        {category && category?.subcategories.length > 8 && <View
          style={[
            Position.absolute,
            Position.bottom20,
            Position.right20,
            zIndex.z20
          ]}
        >
          <Pressable
            onPress={() => onScroll('top')}
            style={[
              Background.primary,
              {
                width: SIZE_BUTTONS_SCROLL,
                height: SIZE_BUTTONS_SCROLL
              },
              Margin.mb10,
              Flex.itemsCenter,
              Flex.justifyCenter
            ]}
          >
            <Image
            resizeMode='center'
            style={{
              width: W_ARROW_BUTTON_SCROLL,
              height: H_ARROW_BUTTON_SCROLL
            }}
              source={require('../../assets/img/ic_arrow-up.png')} />
          </Pressable>
          <Pressable
            onPress={() => onScroll('end')}
            style={[
              Background.primary,
              {
                width: SIZE_BUTTONS_SCROLL,
                height: SIZE_BUTTONS_SCROLL
              },
              Margin.mt10,
              Flex.itemsCenter,
              Flex.justifyCenter
            ]}
          >
            <Image
            resizeMode='center'
            style={{
              width: W_ARROW_BUTTON_SCROLL,
              height: H_ARROW_BUTTON_SCROLL
            }}
              source={require('../../assets/img/ic_arrow-down.png')} />

          </Pressable>
        </View>}
      </View>
    </Layout>
  )
}

export default CategoryDetail
