import React from 'react'
import { ThemeProvider } from 'styled-components'
import designTokens from './designTokens'

class Theme extends React.Component {
  render = () => {
    const { children } = this.props
    return (
      <ThemeProvider theme={designTokens}>
          {children}
      </ThemeProvider>
    )
  }
}

export default Theme