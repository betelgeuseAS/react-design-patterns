import React, { forwardRef } from 'react'

export const CustomInput = forwardRef((props, ref) => (
  <input type="text" {...props} ref={ref} />
))
