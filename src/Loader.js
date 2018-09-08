import React from 'react'
import {Spin} from 'antd'

import 'antd/lib/spin/style/css'

export const LoaderContext = React.createContext({
  spinning: false,
  tip: 'Loading...',
})

// the HOC can be written like this which is easier to read
/* function Loader(Component) {
  const LoaderWrapper = props => (
    <LoaderContext.Consumer>
      {loaderContext => (
        <Spin {...loaderContext}>
          <Component loader={loaderContext} {...props} />
        </Spin>
      )}
    </LoaderContext.Consumer>
  );

  return LoaderWrapper;
} */

// the HOC can also be written like this which is
// cleaner, but could be harder to read.
const Loader = Component => props => (
  <LoaderContext.Consumer>
    {loaderContext => (
      <Spin {...loaderContext}>
        <Component loader={loaderContext} {...props} />
      </Spin>
    )}
  </LoaderContext.Consumer>
)

export default Loader
