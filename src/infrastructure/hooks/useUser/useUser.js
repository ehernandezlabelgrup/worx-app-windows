import { useDispatch, useSelector } from 'react-redux'
import { ENDPOINT } from '../../api/configuration'
import { actionSetProfile } from '../../redux/actions/user'
import useMutation from '../useMutation'

export const useUser = () => {
  const { token, user } = useSelector(state => state.userReducer)
  const [users] = useMutation(ENDPOINT.USERS)
  const [fetchInfo] = useMutation(ENDPOINT.PROFILE)
  const dispatch = useDispatch()
  const getInfoUser = async () => {
    const { data, success } = await fetchInfo({ method: 'get' })
    if (success && data) {
      dispatch(actionSetProfile(data.profile))
      return {
        success
      }
    }
    return {
      success: false
    }
  }

  const updateProfile = async (values) => {
    const { success, data, error } = await users({
      method: 'put',
      variables: values,
      addToUrl: `/${user.id}`
    })

    return {
      success,
      data,
      error
    }
  }

  const deleteUser = async () => {
    const { success, data, error } = await users({
      method: 'delete',
      addToUrl: `/${user.id}`
    })

    return {
      success,
      data,
      error
    }
  }

  return { token, user, getInfoUser, updateProfile, deleteUser }
}
