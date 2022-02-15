import axios from 'axios'

import { getAppId } from '~/repositories/app'
import {
  getAuth,
  getRefreshToken,
  removeAuth,
  setAuth,
} from '~/repositories/auth'

const { REACT_APP_API_URL: baseURL, REACT_APP_API_KEY: apiKey } = process.env

const accessTokenInterceptor = (config) => {
  const appId = getAppId()
  const { accessToken } = getAuth()

  config.headers.Authorization = `Bearer ${accessToken}`

  config.baseURL = `${config.baseURL}/${appId}`

  return config
}

const refreshTokenInterceptor = (api) => async (error) => {
  const refreshToken = getRefreshToken()

  const { response, config } = error

  if (response.status !== 403 || !refreshToken) {
    throw error
  }

  try {
    const { data } = await api.post('/auth/refresh', { refreshToken })

    setAuth({ ...data, isPassenger: data.accountType === 'passenger' })

    return await api.request({ ...config, baseURL: api.baseURL })
  } catch {
    removeAuth()

    window.location.reload()

    throw error
  }
}

const base = axios.create({ baseURL })

const admin = axios.create({ baseURL: `${baseURL}/admin` })

const api = axios.create({
  baseURL: `${baseURL}/apps`,
  headers: {
    'X-Chevette-Key': apiKey,
  },
})

const apiForm = axios.create({
  baseURL: `${baseURL}/apps`,
  headers: {
    'X-Chevette-Key': apiKey,
    'Content-Type': 'multipart/form-data',
  },
})

api.interceptors.request.use(accessTokenInterceptor)

apiForm.interceptors.request.use(accessTokenInterceptor)

api.interceptors.response.use(
  (response) => response,
  refreshTokenInterceptor(api)
)

apiForm.interceptors.response.use(
  (response) => response,
  refreshTokenInterceptor(apiForm)
)

export { baseURL, base, admin, api, apiForm }
