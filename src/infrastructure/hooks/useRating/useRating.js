import { useState } from 'react'
import { ENDPOINT } from '../../api/configuration'
import useMutation from '../useMutation'

export const useRating = () => {
  const [store] = useMutation(ENDPOINT.RATING)
  const [loading, setLoading] = useState(false)

  const storeRating = async (values) => {
    setLoading(true)
    try {
      const { success } = await store({
        method: 'post',
        variables: values

      })
      setLoading(false)
      if (success) {
        return {
          success: true
        }
      }
    } catch (error) {
      setLoading(false)
      return {
        success: false
      }
    }
  }

  return {
    storeRating,
    loading
  }
}
