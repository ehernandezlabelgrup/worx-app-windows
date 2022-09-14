import { useEffect, useState } from 'react'
import { ENDPOINT } from '../../api/configuration'
import useMutation from '../useMutation'

export const useFaqs = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const [getFaqsApi] = useMutation(ENDPOINT.FAQS)

  const getFaqs = async () => {
    try {
      const { data, success } = await getFaqsApi({
        method: 'get'
      })
      console.log(data)
      setLoading(false)
      if (success) {
        setData(data.faqs.data)
      }
    } catch (error) {
      setLoading(false)
    }
  }
  useEffect(() => {
    getFaqs()
  }, [])

  return {
    data,
    loading
  }
}
