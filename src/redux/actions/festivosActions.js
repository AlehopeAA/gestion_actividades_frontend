import axios from 'axios'
import {
  FESTIVOS_REGISTER_REQUEST,
  FESTIVOS_REGISTER_SUCCESS,
  FESTIVOS_REGISTER_FAIL,
  FESTIVOS_LIST_REQUEST,
  FESTIVOS_LIST_SUCCESS,
  FESTIVOS_LIST_FAIL,
  FESTIVOS_UPDATE_SUCCESS,
  FESTIVOS_UPDATE_REQUEST,
  FESTIVOS_UPDATE_FAIL,
  FESTIVOS_DELETE_FAIL,
  FESTIVOS_DELETE_REQUEST,
  FESTIVOS_DELETE_SUCCESS,
} from '../constants/festivosConstants.js'

export const registerFestivos = (festivos) => async (dispatch, getState) => {
  try {
    dispatch({ type: FESTIVOS_REGISTER_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Cache-Control': 'no-cache',
      },
    }
    const { data } = await axios.post('/api/festivos', festivos, config)

    dispatch({ type: FESTIVOS_REGISTER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FESTIVOS_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const getFestivos = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FESTIVOS_LIST_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Cache-Control': 'no-cache',
      },
    }
    const { data } = await axios.get('/api/festivos', config)

    dispatch({ type: FESTIVOS_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FESTIVOS_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const festivosUpdateInfo = (festivos) => async (dispatch, getState) => {
  try {
    dispatch({ type: FESTIVOS_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Cache-Control': 'no-cache',
      },
    }
    const { data } = await axios.put(`/api/festivos/${festivos.id_calendario}`, festivos, config)

    dispatch({ type: FESTIVOS_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FESTIVOS_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const deleteFestivos = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: FESTIVOS_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        'Cache-Control': 'no-cache',
      },
    }

    await axios.delete(`/api/festivos/${id}`, config)

    dispatch({ type: FESTIVOS_DELETE_SUCCESS })
  } catch (error) {
    dispatch({
      type: FESTIVOS_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
