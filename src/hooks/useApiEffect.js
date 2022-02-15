import { useEffect } from 'react'

import useApi from './useApi'

const useApiEffect = (
  service = () => null,
  callback = () => null,
  errorHandler = () => null
) => {
  const { request } = useApi()

  useEffect(() => {
    request(service, callback, errorHandler)
  }, [])
}

export default useApiEffect
