import { StyleSheet } from 'react-native'
export const Flex = StyleSheet.create({
  itemsCenter: {
    alignItems: 'center'
  },
  intemsStart: {
    alignItems: 'flex-start'
  },
  itemsEnd: {
    alignItems: 'flex-end'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  justifyStart: {
    alignItems: 'flex-start'
  },
  justifyBetween: {
    justifyContent: 'space-between'
  },
  justifyAround: {
    justifyContent: 'space-around'
  },
  flex1: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  col: {
    flexDirection: 'column'
  },
  colReverse: {
    flexDirection: 'column-reverse'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  noWrap: {
    flexWrap: 'nowrap'
  },
  wrapReverse: {
    flexWrap: 'wrap-reverse'
  },
  grow0: {
    flexGrow: 0
  },
  grow: {
    flexGrow: 1
  },
  shrink0: {
    flexShrink: 0
  },
  shrink: {
    flexShrink: 1
  }
})
