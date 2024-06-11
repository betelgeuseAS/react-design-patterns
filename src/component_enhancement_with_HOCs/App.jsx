import React from 'react'

import { HigherOrderComponent } from './HigherOrderComponent'
import { AvatarComponent } from './AvatarComponent'

const SampleHOC = HigherOrderComponent(AvatarComponent)

export const App = () => {
  return (
    <SampleHOC description="Frontend Engineer" />
  )
}
