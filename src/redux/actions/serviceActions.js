import axios from 'axios'
import {
  SERVICE_REGISTER_REQUEST,
  SERVICE_REGISTER_SUCCESS,
  SERVICE_REGISTER_FAIL,
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_UPDATE_SUCCESS,
  SERVICE_UPDATE_REQUEST,
  SERVICE_UPDATE_FAIL,
  SERVICE_DELETE_FAIL,
  SERVICE_DELETE_REQUEST,
  SERVICE_DELETE_SUCCESS,
  SERVICE_RELATED_LIST_REQUEST,
  SERVICE_RELATED_LIST_SUCCESS,
  SERVICE_RELATED_LIST_FAIL
} from '../constants/serviceConstants'

export const registerService = (service) => async (dispatch) => {
   try {
      dispatch({ type: SERVICE_REGISTER_REQUEST })

      const config = {
         headers: {
           Authorization: `Bearer ${userInfo.token}`,
           'Cache-Control': 'no-cache',
         },
       }
       const { data } = await axios.post('/api/perfilservicios', service, config)

      dispatch({ type: SERVICE_REGISTER_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: SERVICE_REGISTER_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
   }
}

export const getServices = () => async (dispatch, getState) => {
   try {
      dispatch({ type: SERVICE_LIST_REQUEST })

      const {
         userLogin: { userInfo },
       } = getState()
   
       const config = {
         headers: {
           Authorization: `Bearer ${userInfo.token}`,
           'Cache-Control': 'no-cache',
         },
       }
      const { data } = await axios.get('/api/perfilservicios', config)

      dispatch({ type: SERVICE_LIST_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: SERVICE_LIST_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
   }
}

export const serviceUpdateInfo = (service) => async (dispatch, getState) => {
   try {
      dispatch({ type: SERVICE_UPDATE_REQUEST })

      const {
         userLogin: { userInfo },
       } = getState()
   
       const config = {
         headers: {
           Authorization: `Bearer ${userInfo.token}`,
           'Cache-Control': 'no-cache',
         },
       }
       const { data } = await axios.put(`/api/perfilservicios/${service.id_servicio}`, service, config)

      dispatch({ type: SERVICE_UPDATE_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: SERVICE_UPDATE_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
   }
}

export const deleteService = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: SERVICE_DELETE_REQUEST })

      const {
         userLogin: { userInfo },
       } = getState()
   
       const config = {
         headers: {
           Authorization: `Bearer ${userInfo.token}`,
           'Cache-Control': 'no-cache',
         },
       }
   
       await axios.delete(`/api/perfilservicios/${id}`, config)

      dispatch({ type: SERVICE_DELETE_SUCCESS })
   } catch (error) {
      dispatch({
         type: SERVICE_DELETE_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
   }
}

export const getServicesRelated = () => async (dispatch, getState) => {
   try {
      dispatch({ type: SERVICE_RELATED_LIST_REQUEST })

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

      const { data } = await axios.post('/api/perfilservicios/relacionados', {}, config)

      dispatch({ type: SERVICE_RELATED_LIST_SUCCESS, payload: data })
   } catch (error) {
      dispatch({
         type: SERVICE_RELATED_LIST_FAIL,
         payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
   }
}
