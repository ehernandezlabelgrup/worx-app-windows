import { View } from 'react-native'
import React from 'react'
import Paragraphs from '../global/Paragraphs/Paraghraps'
import { Color, Flex, Margin, Padding } from '../../infrastructure/theme'
import ItemFadeAnimation from '../ItemFadeAnimation'
import PropTypes from 'prop-types'

export default function ProductDetailsContentTab ({ data, activeTab }) {
  const showParagrahs = (item) => {
    if (activeTab === 'features') {
      return (
                <View style={[Margin.mt1]}>
                    <Paragraphs
                        size='base'
                        weight={'bold'}
                        style={[Color.white]}
                    >
                        {item?.name}
                    </Paragraphs>
                    <Paragraphs
                        size='sm'
                        weight={'italic'}
                        style={[Color.white, Margin.my10]}
                    >
                        {item?.value}
                    </Paragraphs>
                </View>
      )
    }
    if (activeTab === 'accesories') {
      return (
                <View style={[Margin.mt1, Flex.row]}>
                    <Paragraphs
                        weight={'italic'}
                        size='base'
                        style={[Color.white, Margin.mr10]}
                    >
                        ({item?.name})
                    </Paragraphs>
                    <Paragraphs
                        size='base'
                        weight={'italic'}
                        style={[Color.white, Margin.my10]}
                    >
                        {item?.value}
                    </Paragraphs>
                </View>
      )
    }

    return <Paragraphs
            weight={'italic'}
            size='base'
            style={[Color.white, Margin.my10]}
        >
            {item?.data}
        </Paragraphs>
  }
  return (
        <View style={[Padding.px20, Padding.py20, Margin.mt20]}>
            {
                data?.map((item, index) => <ItemFadeAnimation key={index}>
                    {showParagrahs(item)}
                </ItemFadeAnimation>
                )
            }
        </View>
  )
}

ProductDetailsContentTab.propTypes = {
  data: PropTypes.array,
  activeTab: PropTypes.string
}
