import React from 'react'

import loader from './Loader'

const Content = ({loader: {spinning}}) => (
  <div>
    {spinning
      ? 'The content is loading right now!'
      : 'The content has been loaded!'}
  </div>
)

export default loader(Content)
