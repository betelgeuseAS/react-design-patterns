import React, { FC } from 'react'

export const Paragraph: FC = (props) => {
  const { color, size, children, ...rest } = props

  return (
    <p style={{ color, fontSize: size }} {...rest}>
      { children }
    </p>
  )
}
