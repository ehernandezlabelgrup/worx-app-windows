import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
export const Height = StyleSheet.create({
  h0: {
    height: 0
  },
  full: {
    height: '100%'
  },
  screen: {
    height
  },
  h1t2: {
    height: '50%'
  },
  h1t3: {
    height: '33.333333%'
  },
  h2t3: {
    height: '66.666667%'
  },
  h1t4: {
    height: '25%'
  },
  h2t4: {
    height: '50%'
  },

  h3t4: {
    height: '75%'
  },
  h1t5: {
    height: '20%'
  },
  h2t5: {
    height: '40%'
  },
  h3t5: {
    height: '60'
  },
  h4t5: {
    height: '80%'
  },
  h1t6: {
    height: '16.666667%'
  },

  h2t6: {
    height: '33.333333%'
  },
  h3t6: {
    height: '50%'
  },
  h4t6: {
    height: '66.666667%'
  },
  h5t6: {
    height: '83.333333%'
  }
})
