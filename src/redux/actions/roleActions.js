import axios from 'axios'
import {
   ROLE_REGISTER_REQUEST,
   ROLE_REGISTER_SUCCESS,
   ROLE_REGISTER_FAIL,
   ROLE_LIST_REQUEST,
   ROLE_LIST_SUCCESS,
   ROLE_LIST_FAIL,
   ROLE_UPDATE_SUCCESS,
   ROLE_UPDATE_REQUEST,
   ROLE_UPDATE_FAIL,
   ROLE_DELETE_FAIL,
   ROLE_DELETE_REQUEST,
   ROLE_DELETE_SUCCESS,
   ROLE_RELATED_LIST_REQUEST,
   ROLE_RELATED_LIST_SUCCESS,
   ROLE_RELATED_LIST_FAIL,
} from '../constants/roleConstants'

export const registerRole = (role) => async (dispatch) => {
   try {
      dispatch({ type: ROLE_REGISTER_REQUEST })

      const config = {
         headers: {
           Authorization: `Bearer ${userInfo.token}`,
           'Cache-Control': 'no-cache',
         },
       }
       const { data } = await axios.post('/api/perfilroles', role, config)

      dispatch({ type: ROLE_REGISTER_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: ROLE_REGISTER_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
   }
}

export const getRoles = () => async (dispatch, getState) => {
   try {
      dispatch({ type: ROLE_LIST_REQUEST })

      const {
         userLogin: { userInfo },
       } = getState()
   
       const config = {
         headers: {
           Authorization: `Bearer ${userInfo.token}`,
           'Cache-Control': 'no-cache',
         },
       }
      const { data } = await axios.get('/api/perfilroles', config)

      dispatch({ type: ROLE_LIST_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: ROLE_LIST_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
   }
}

export const roleUpdateInfo = (role) => async (dispatch, getState) => {
   try {
      dispatch({ type: ROLE_UPDATE_REQUEST })

      const {
         userLogin: { userInfo },
       } = getState()
   
       const config = {
         headers: {
           Authorization: `Bearer ${userInfo.token}`,
           'Cache-Control': 'no-cache',
         },
       }
       const { data } = await axios.put(`/api/perfilroles/${role.id_rol}`, role, config)

      dispatch({ type: ROLE_UPDATE_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: ROLE_UPDATE_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
   }
}

export const deleteRole = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: ROLE_DELETE_REQUEST })

      const {
         userLogin: { userInfo },
       } = getState()
   
       const config = {
         headers: {
           Authorization: `Bearer ${userInfo.token}`,
           'Cache-Control': 'no-cache',
         },
       }
   
       await axios.delete(`/api/perfilroles/${id}`, config)

      dispatch({ type: ROLE_DELETE_SUCCESS })
   } catch (error) {
      dispatch({
         type: ROLE_DELETE_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
   }
}

export const getRolesRelated = () => async (dispatch, getState) => {
   try {
      dispatch({ type: ROLE_RELATED_LIST_REQUEST })

      const {
         userLogin: { userInfo },
      } = getState()

      const config = {
         headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            Authorization: `Bearer ${userInfo.token}`,
         },
      }

      const { data } = await axios.post('/api/perfilroles/relacionados', {},  config)

      dispatch({ type: ROLE_RELATED_LIST_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: ROLE_RELATED_LIST_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
   }
}
