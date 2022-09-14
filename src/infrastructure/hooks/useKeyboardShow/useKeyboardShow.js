import { useState, useEffect } from 'react'
import { Keyboard } from 'react-native'

export const useKeyboardShow = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', (frames) => {
      setKeyboardStatus(frames.endCoordinates.height)
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(0)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  return { keyboardStatus }
}
