import React from 'react'

import Layout from './Layout'
import Content from './Content'
import {LoaderContext} from './Loader'

class Main extends React.Component {
  state = {loading: true, timer: null}

  componentDidMount() {
    this.createTimer()
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer)
  }

  createTimer = () =>
    this.setState({
      timer: setTimeout(() => {
        this.updateLoading()
      }, 5000),
    })

  updateLoading = () => this.setState({loading: false})

  render() {
    return (
      <Layout>
        <LoaderContext.Provider
          value={{
            spinning: this.state.loading,
            tip: "It's Working",
          }}
        >
          <Content />
        </LoaderContext.Provider>
      </Layout>
    )
  }
}

export default Main
