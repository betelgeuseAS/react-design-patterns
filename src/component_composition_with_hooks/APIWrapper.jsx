import React from 'react'

import { ErrorMessage } from 'your_error_message'
import { Loader } from 'you_loader'

export const APIWrapper = ({ isLoading, data = {}, error, children, }) => {
  if (isLoading) {
    return <Loader />
  }

  if (error && !(Object.keys(data).length !== 0 || data.length > 0)) {
    return <ErrorMessage error={error} />
  }

  if ((data && Object.keys(data).length !== 0) || data.length > 0) {
    return children
  }
}
