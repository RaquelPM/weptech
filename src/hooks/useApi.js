const useApi = () => {
  const request = async (
    service = () => null,
    callback = () => null,
    errorHandler = () => null
  ) => {
    try {
      const response = await service()

      callback(response)
    } catch (error) {
      errorHandler(error.response)
      console.log(error)
    }
  }

  return { request }
}

export default useApi
