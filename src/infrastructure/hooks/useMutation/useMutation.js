import axios from 'axios'
import { useState } from 'react'
import { API, BASE_URL } from '../../api/configuration'
import { useSelector } from 'react-redux'

export const useMutation = (query) => {
  const [loading, setLoading] = useState(false)
  const { token } = useSelector(state => state.userReducer)
  const fetchData = async ({ method = 'GET', variables, addToUrl }) => {
    setLoading(true)
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      url: `${BASE_URL}${API}${query}`
    }
    if (variables) {
      config.data = variables
    }

    if (addToUrl) {
      config.url += addToUrl
    }
    if (token) { config.headers.Authorization = `Bearer ${token}` }
    console.log(config)
    const { success, data, error } = await axios(config)
      .then(res => {
        return {
          success: true,
          data: res.data
        }
      })
      .catch(err => {
        console.log(err, 'error')
        return {
          success: false,
          error: err?.response?.data?.errors
        }
      })
    setLoading(false)
    if (success) {
      return {
        success: true,
        data: data
      }
    } else {
      return {
        success: false,
        error
      }
    }
  }

  return [fetchData, { loading }]
}
