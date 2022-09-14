/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import SplashScreen from './src/screens/SplashScreen'
import CategoriesScreen from './src/screens/CategoriesScreen'
import CategoryDetail from './src/screens/CategoryDetail'
import ProductListScreen from './src/screens/ProductListScreen'
import ProductVideoScreen from './src/screens/ProductVideoScreen'
import ProductDetailScreen from './src/screens/ProductDetailScreen'
import { NativeRouter, Route, Routes } from 'react-router-native'
import TimerContext from './src/infrastructure/context/TimerContext'

/**
 * @author ehenandez
 * @description routes for app windows
 */
const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<TimerContext />}>
          <Route index element={<SplashScreen />} />
          <Route path="/categories" element={<CategoriesScreen />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route
            path="/category/:id_parent/:id"
            element={<ProductListScreen />}
          />
          <Route path="/productvideo/:id" element={<ProductVideoScreen />} />
          <Route path="/productvideo" element={<ProductVideoScreen />} />
          <Route path="/product/:id" element={<ProductDetailScreen />} />
        </Route>
      </Routes>
    </NativeRouter>
  )
}

export default App
