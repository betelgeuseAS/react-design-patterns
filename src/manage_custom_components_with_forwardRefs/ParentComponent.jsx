import React, { useRef, useEffect } from 'react'

import { CustomInput } from './CustomInput'

export const ParentComponent = () => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return <CustomInput ref={inputRef} />
}
