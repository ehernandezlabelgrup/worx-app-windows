import React, { useRef, useEffect } from 'react'
import { Animated } from 'react-native'
import PropTypes from 'prop-types'
export default function ItemFadeAnimation (props) {
  const fadeAnim = useRef(new Animated.Value(0)).current // Initial value for opacity: 0
  const tanslateLeft = useRef(new Animated.Value(-10)).current // Initial value for opacity: 0
  useEffect(() => {
    Animated.parallel([
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
          delay: props?.delay * 300 || 0
        }
      ),
      Animated.timing(
        tanslateLeft,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
          delay: props?.delay * 300 || 0
        }
      )
    ]).start()
  }, [fadeAnim])

  return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,
          transform: [{ translateX: tanslateLeft }]
        }}
      >
        {props.children}
      </Animated.View>)
}

ItemFadeAnimation.propTypes = {
  delay: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.any
}
