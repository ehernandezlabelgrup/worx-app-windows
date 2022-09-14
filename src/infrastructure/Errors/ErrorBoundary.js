import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageError from './PageError'
import * as Sentry from '@sentry/react-native'

/**
 * @author ehernandez
 * Screen for showing error messages
 * Y reset app
 */
class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    Sentry.captureMessage(error.message);
  }

  render () {
    if (this.state.hasError) {
      return <PageError />
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ErrorBoundary
