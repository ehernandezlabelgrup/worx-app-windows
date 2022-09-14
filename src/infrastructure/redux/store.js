import { createStore, applyMiddleware, compose } from 'redux'

// redux persist
import { persistStore, persistReducer } from 'redux-persist'

// mandatory for react > 0.60+
import AsyncStorage from '@react-native-async-storage/async-storage'

// redux-logger
import { createLogger } from 'redux-logger'

// reducers
import Reducers from './reducers'

const logger = createLogger({
  collapsed: true
})

const middlewares = []

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userReducer']
}

const persistedReducer = persistReducer(persistConfig, Reducers)
// const sagaMiddleware = createSagaMiddleware()

middlewares.push(logger)

// saga init
// middlewares.push(sagaMiddleware)

const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)))
const persistor = persistStore(store)

// sagaMiddleware.run(saga)

export { store, persistor }
