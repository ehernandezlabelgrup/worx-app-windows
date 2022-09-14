import { useCallback } from 'react'
import { Linking } from 'react-native'

/**
 * @author Emilio Hernandez
 * @returns {function}
 */
export const useOpenLinking = () => {
  const openEmail = useCallback((email, subject = 'Contacto totsafe') => {
    Linking.openURL(`mailto:${email}?subject=${subject}`)
  }, [])

  const openPhone = useCallback((phone) => {
    Linking.openURL(`tel:${phone}`)
  }, [])
  return {
    openEmail,
    openPhone
  }
}
