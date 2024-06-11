import React from 'react'

import { useCustomAPICallHook } from './useCustomAPICallHook'

import { APIWrapper } from './APIWrapper'
import { ResponseView } from 'your_response_view'

export const App = () => {
  const { response, error, isLoading } = useCustomAPICallHook('your_api_end_point')

  return (
    <APIWrapper isLoading={isLoading} error={error} data={response} >
      <ResponseView testData = {response}  />
    </APIWrapper>
  )
}
