import storage from './storage'

export const setAuth = ({
  userId,
  accountId,
  accessToken,
  refreshToken,
  isPassenger,
}) => {
  storage.setItem('userId', userId)
  storage.setItem('accountId', accountId)
  storage.setItem('accessToken', accessToken)
  storage.setItem('refreshToken', refreshToken)
  storage.setItem('isPassenger', isPassenger)
}

export const getUserId = () => storage.getItem('userId')

export const getAccountId = () => storage.getItem('accountId')

export const getAccessToken = () => storage.getItem('accessToken')

export const getRefreshToken = () => storage.getItem('refreshToken')

export const getIsPassenger = () => {
  const is = storage.getItem('isPassenger')
  if (is === 'true') return true
  return false
}

export const getAuth = () => {
  const userId = getUserId()
  const accountId = getAccountId()
  const accessToken = getAccessToken()
  const refreshToken = getRefreshToken()
  const isPassenger = getIsPassenger()

  return { userId, accountId, accessToken, refreshToken, isPassenger }
}

export const removeAuth = () => {
  storage.removeItem('userId')
  storage.removeItem('accountId')
  storage.removeItem('accessToken')
  storage.removeItem('refreshToken')
  storage.removeItem('isPassenger')
}
