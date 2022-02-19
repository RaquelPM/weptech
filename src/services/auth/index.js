import { base } from '../api'

export const login = (data) => base.post('/auth/login', data)

export const refresh = (data) => base.post('/auth/refresh', data)
