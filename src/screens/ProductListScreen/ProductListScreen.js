import React, { useEffect, useRef, useState } from 'react'
import Virtual from '../../components/Virtual/Virtual'
import { useParams } from 'react-router-native'
import { categories } from '../../infrastructure/constants/categories'
import ProductMiniature from '../../components/ProductMiniature/ProductMiniature'
import { Image, Pressable, ScrollView, View } from 'react-native'
import { Background, Flex, Margin, Position, zIndex } from '../../infrastructure/theme'
import Layout from '../../components/Layout/Layout'
export default function ProductListScreen () {
  const { id, id_parent: idParent } = useParams()
  const [products, setProducts] = useState([])

  const scrollRef = useRef()

  useEffect(() => {
    let data = []
    categories.forEach(i => {
      if (Number(i.id) === Number(idParent)) {
        i.subcategories.forEach(j => {
          if (Number(j.id) === Number(id)) {
            data = j.products
            data = data?.map(i => {
              i.compare = j.compare
              return i
            })
          }
        })
      }
    })
    if (data) {
      setProducts(data)
    }
  }, [])

  return (
    <Layout>
      <View
        style={[Flex.flex1, Background.white]}
      >
        <ScrollView
          scrollEnabled
          centerContent

          ref={scrollRef}
        >
          <View style={[Background.white, Flex.row, Flex.wrap]}>
            {
              products?.map((i, idx) => Number(i.is_virtual)
                ? <Virtual length={products.length} {...i} key={idx} />
                : <ProductMiniature compare idx={idx} length={products.length} {...i} key={idx} />)
            }
          </View>
        </ScrollView>
        {products && products?.length > 8 && <View
          style={[Position.absolute, Position.bottom20, Position.right20, zIndex.z20]}
        >
          <Pressable
            onPress={() => console.log(scrollRef.current.scrollTo({ y: 0, x: 0 }))}
            style={[Background.primary, { width: 60, height: 60 }, Margin.mb10, Flex.itemsCenter, Flex.justifyCenter]}
          >
            <Image resizeMode='center' style={{ width: 11, height: 16 }} source={require('../../assets/img/ic_arrow-up.png')} />

          </Pressable>
          <Pressable
            onPress={() => console.log(scrollRef.current.scrollToEnd())}

            style={[Background.primary, { width: 60, height: 60 }, Margin.mt10, Flex.itemsCenter, Flex.justifyCenter]}
          >
            <Image resizeMode='center' style={{ width: 11, height: 16 }} source={require('../../assets/img/ic_arrow-down.png')} />

          </Pressable>
        </View>}
      </View>
    </Layout>
  )
}
