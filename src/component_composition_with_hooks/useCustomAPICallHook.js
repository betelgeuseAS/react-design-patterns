import { useState, useEffect } from 'react'

import { getApiCall } from 'your_api_call'

export const useCustomAPICallHook = (apiEndPointUrl) => {
  const [apiStatus, setApiStatus] = useState({
    response: false,
    error: {},
    isLoading: true,
  })

  useEffect(() => {
    if (!apiEndPointUrl) {
      setApiStatus({
        response: false,
        error: { errorCode: 'your_status_code', message: 'You must need to pass api end-point!' },
        isLoading: false,
      })
    } else {
      setApiStatus({
        response: false,
        error: {},
        isLoading: true,
      })
    }
    getApiCall(apiEndPointUrl).then((responseData) => {
      if (responseData.status === 200) {
        setApiStatus({
          response: responseData,
          error: {},
          isLoading: false,
        })
      } else {
        setApiStatus({
          response: false,
          error: 'your_error',
          isLoading: false,
        })
      }
    })

  }, [apiEndPointUrl])

  return { response: apiStatus.response, error: apiStatus.error, isLoading: apiStatus.isLoading }
}
