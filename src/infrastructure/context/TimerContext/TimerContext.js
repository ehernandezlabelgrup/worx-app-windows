import React, { useEffect, useRef } from 'react'
import { View } from 'react-native'
import { Outlet, useNavigate } from 'react-router-native'
import { Flex } from '../../theme'
import ErrorBoundary from 'react-native-error-boundary'

const TIME_TO_SPLASH = 300000

/**
 * @author ehernandez
 * @description context for control inactive app.  Custom idle timer
 * if app in inactive for 5 minutes, redirect to video screnn
 */
const TimerContext = () => {
  const navigate = useNavigate()

  // create idle timer
  const idleTimer = useRef(null)

  /**
   * @author ehernandez
   * @description reset idle timer when active app
   */
  const resetIdleTimer = () => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current)
    }
    idleTimer.current = setTimeout(() => {
      navigate('/productvideo', { replace: true })
    }, TIME_TO_SPLASH)
  }

  useEffect(() => {
    resetIdleTimer()
    return () => {
      clearTimeout(idleTimer.current)
    }
  }, [])

  return (
    <ErrorBoundary>
      <View onTouchEnd={() => resetIdleTimer()} style={[Flex.flex1]}>
        <Outlet />
      </View>
    </ErrorBoundary>
  )
}

export default TimerContext
