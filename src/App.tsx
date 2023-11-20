import { useState } from 'react'
import './App.css'
import LandingPage from './views/pages/landing'
import theme from './constants/themes'
import { ThemeProvider } from '@mui/material'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <LandingPage></LandingPage>
    </ThemeProvider>
  )
}

export default App
