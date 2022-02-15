import storage from './storage'

export const setAppId = (appId) => storage.setItem('appId', appId)

export const getAppId = () => storage.getItem('appId')

export const removeAppId = () => storage.removeItem('appId')
