import { ENDPOINT } from '../../api/configuration'
import useMutation from '../useMutation'
import { useState } from 'react'
import { differenceInDays } from 'date-fns'

export const useInsure = () => {
  const [fetchInsurances] = useMutation(ENDPOINT.INSURANCES)
  const [insures, seInsures] = useState([])

  const orderByType = (data) => {
    const types = []
    // order by type
    const orderByType = data.reduce((acc, curr) => {
      const type = curr?.insurance_type?.name
      if (!acc[type]) {
        acc[type] = {
          value: 0
        }
      }
      acc[type] = {
        ...curr.insurance_type,
        value: Number(curr.cost) + Number(acc[type].value),
        insures: [...(acc[type].insures || []), curr]
      }
      return acc
    }
    , {})

    Object.keys(orderByType).forEach(key => {
      types.push({ ...orderByType[key], name: key })
    })

    return types
  }

  const getInsuresUser = async (all) => {
    const { success, data } = await fetchInsurances({ methtod: 'GET' })
    if (success) {
      const now = new Date()
      const filtered = data.data.filter(i => {
        if (all) {
          return i
        }
        if (differenceInDays(new Date(i.expiration_date), now) > 0) {
          return i
        }
      })

      seInsures(filtered)
    }
  }

  const getDetail = async (id) => {
    const { success, data } = await fetchInsurances({ methtod: 'GET', addToUrl: `/${id}` })
    if (success) {
      return {
        data: data?.data,
        success
      }
    }

    return {
      success: false
    }
  }

  const deleteInsure = async (id) => {
    const { success } = await fetchInsurances({ method: 'DELETE', addToUrl: `/${id}` })
    return {
      success
    }
  }

  return { getInsuresUser, insures, orderByType, getDetail, deleteInsure }
}
