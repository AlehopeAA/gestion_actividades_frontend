import axios from 'axios'
import {
  USER_PERMISSION_REGISTER_REQUEST,
  USER_PERMISSION_REGISTER_SUCCESS,
  USER_PERMISSION_REGISTER_FAIL,
  USER_PERMISSION_LIST_REQUEST,
  USER_PERMISSION_LIST_SUCCESS,
  USER_PERMISSION_LIST_FAIL,
  USER_PERMISSION_UPDATE_SUCCESS,
  USER_PERMISSION_UPDATE_REQUEST,
  USER_PERMISSION_UPDATE_FAIL,
  USER_PERMISSION_DELETE_FAIL,
  USER_PERMISSION_DELETE_REQUEST,
  USER_PERMISSION_DELETE_SUCCESS
} from '../constants/userPermissionConstants.js'

export const registerUserPermission = (userPermission) => async (dispatch) => {
  try {
    dispatch({ type: USER_PERMISSION_REGISTER_REQUEST })

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Cache-Control': 'no-cache'
      }
    }
    const { data } = await axios.post(
      '/api/permisospuesto',
      userPermission,
      config
    )

    dispatch({ type: USER_PERMISSION_REGISTER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_PERMISSION_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const getUserPermissions = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PERMISSION_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Cache-Control': 'no-cache'
      }
    }
    const { data } = await axios.get('/api/permisospuesto', config)

    dispatch({ type: USER_PERMISSION_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_PERMISSION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const userPermissionUpdateInfo = (userPermission) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: USER_PERMISSION_UPDATE_REQUEST })

    const {
      userLogin: { userInfo }
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Cache-Control': 'no-cache'
      }
    }
    const { data } = await axios.put(
      `/api/permisospuesto/${userPermission.id_permiso_puesto}`,
      userPermission,
      config
    )

    dispatch({ type: USER_PERMISSION_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: USER_PERMISSION_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}

export const deleteUserPermission = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PERMISSION_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Cache-Control': 'no-cache',
      },
    }

    await axios.delete(`/api/permisospuesto/${id}`, config)

    dispatch({ type: USER_PERMISSION_DELETE_SUCCESS })
  } catch (error) {
    dispatch({
      type: USER_PERMISSION_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    })
  }
}
