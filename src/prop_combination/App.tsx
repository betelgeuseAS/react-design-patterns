import React, { FC } from 'react'

import { Paragraph } from './Paragraph'

export const App: FC = () => {
  const paragraphProps = {
    color: 'red',
    size: '16px',
    lineHeight: '1.5'
  }

  return <Paragraph {...paragraphProps}>This is a Paragraph.</Paragraph>
}
