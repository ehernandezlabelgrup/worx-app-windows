import { Image, Pressable, ScrollView, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Background, Color, Flex, Height, Margin, Padding, Position, Width, zIndex } from '../../infrastructure/theme'
import Layout from '../../components/Layout/Layout'
import { useLocation } from 'react-router-native'
import Paragraphs from '../../components/global/Paragraphs/Paraghraps'
import ProductCarousell from '../../components/ProductCarousell'
import ProductDetailsContentTab from '../../components/ProductDetailsContentTab'

const TABS = [{
  id: 'especifications',
  label: 'Características'
},
{
  id: 'features',
  label: 'Especificaciones'
},
{
  id: 'accesories',
  label: 'Accesorios'
}
]

/**
 * @author ehernandez
 * @description screen to detail producto
 */
export default function ProductDetailScreen () {
  // STATES
  const [activeTab, setActiveTab] = useState('especifications')
  const [contentTab, setContentTab] = useState(null)
  const [showCompare, setShowCompare] = useState(false)
  const [data, setdata] = useState(null)

  // HOOKS
  const location = useLocation()
  const { width, height } = useWindowDimensions()

  /**
   * @author ehernandez
   * @description pass the params of producto for state in navigation, and set it after render
   */
  useEffect(() => {
    setdata({
      ...location.state
    })
  }, [])

  /**
 * @author ehernandez
 * @description when user change tab caracteristicas | accesorio | especificaciones
 * make 200 ms for delay to create efect fade
 */
  useEffect(() => {
    if (data) {
      setContentTab(null)
      setTimeout(() => {
        setContentTab(data?.[activeTab])
      }, 200)
    }
  }, [activeTab, data])

  return (
    <Layout>
      {showCompare && <Pressable
        onPress={() => setShowCompare(false)}
        style={[
          Position.absolute,
          zIndex.z10,
          {
            width,
            height,
            backgroundColor: 'rgba(255,255,255,.8)'
          },
          Position.left0,
          Position.top0,
          Flex.itemsCenter,
          Flex.justifyCenter
        ]}
      >
        <View
          style={[
            Flex.itemsCenter,
            Flex.justifyCenter,
            { width: '90%', height: '90%' },
            Padding.px20,
            Padding.py20]}>
          <Image resizeMode='contain' source={showCompare} style={[Background.white, Flex.flex1]} />

        </View>

      </Pressable>}
      <View style={[Flex.flex1, Flex.row, Background.white]}>
        <View style={[Width.w12t7, Flex.col]}>
          <View style={[
            Width.full,
            {
              height: 200,
              paddingLeft: 80,
              paddingTop: 80,
              maxWidth: '70%'
            }
          ]}>
            <View style={[Height.full, Width.full]}>
              <Paragraphs
                numberOfLines={2}
                weight={'univers'} size='xl6' style={[Color.secondary]}>
                {data?.name}
              </Paragraphs>
              <Paragraphs numberOfLines={2} size='sm' style={[Color.secondary, Flex.flex1]}>
                {data?.description}
              </Paragraphs>
            </View>
          </View>
          <View style={[Width.full, Flex.flex1]}>
            <ProductCarousell images={data?.images} />
          </View>
        </View>
        <View style={[Width.w12t5, Flex.col, Background.secondary]}>
          <View style={[Width.full, { height: 60 }, Flex.row, Flex.justifyBetween, Flex.itemsCenter]}>
            <View style={[Height.full, Background.white, Flex.justifyCenter, Padding.pr30]}>
              <Paragraphs
                size='sm'
              >
                Ref. LM: {data?.ean13}
              </Paragraphs>
              <Paragraphs
                weight={'univers'}
                size='xl2'
              >
                {data?.reference}
              </Paragraphs>
            </View>
            <View style={[Padding.px10]}>
              <Pressable onPress={() => setShowCompare(data?.compare)

              } style={[Background.primary, Padding.px30, Padding.py10]} >
                <Paragraphs size={'sm'} weight={'univers'} uppercase style={[Color.white]} >
                  Compara
                </Paragraphs>
              </Pressable>
            </View>
          </View>
          <View style={[Flex.flex1, Background.secondary, Padding.py10]}>
            <View style={[Width.full, { height: 50 }, Flex.row, Flex.itemsCenter]}>
              {
                TABS.map((tab, index) => <Pressable
                  onPress={() => setActiveTab(tab.id)}
                  key={tab.id}
                  style={[
                    Background.white,
                    { height: 35 },
                    Flex.itemsCenter,
                    Flex.justifyCenter,
                    Padding.px20,
                    Margin.mx20,
                    Position.relative
                  ]}>
                  <Image style={[{ width: 60, height: 35, left: -10 }, Position.absolute]} source={require('../../assets/img/skew.png')} />
                  <Image style={[{ width: 60, height: 35, right: -10 }, Position.absolute]} source={require('../../assets/img/skew.png')} />
                  <Paragraphs uppercase size='sm' weight={'univers'}>{tab.label}</Paragraphs>

                </Pressable>)
              }
            </View>
            {contentTab && <ScrollView
              scrollEnabled
              style={[
                Width.full,
                { height: 80 },
                Padding.px20,
                Padding.py20
              ]}>
              <ProductDetailsContentTab activeTab={activeTab} data={contentTab} />
            </ScrollView>}
          </View>
        </View>
      </View>
    </Layout>
  )
}
