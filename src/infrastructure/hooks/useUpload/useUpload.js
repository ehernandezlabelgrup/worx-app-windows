import { useState } from 'react'
import { BASE_URL, API } from '../../api/configuration'
import { useSelector } from 'react-redux'
export const useUpload = () => {
  const [loading, setLoading] = useState(false)
  const { token, user } = useSelector(state => state.userReducer)
  const [error, setError] = useState(false)
  const uploadFile = async (file) => {
    const formData = new FormData()
    file.forEach((i, index) => formData.append('files[]', i, `${index}.${i.type.split('/')[1]}`))
    formData.append('user_id', user?.id)
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'multipart/form-data;')
    if (token) {
      myHeaders.append('Authorization', `Bearer ${token}`)
    }
    setLoading(true)
    const response = await fetch(`${BASE_URL}${API}insurances`, {
      method: 'POST',
      headers: myHeaders,
      body: formData

    })
      .then(res => res.text())
      .then(res => {
        return {
          success: true
        }
      })
    setLoading(false)

    return response
  }
  return [uploadFile, { loading, error }]
}
