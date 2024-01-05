import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Box, Typography } from '@mui/material'
import Header from './Header'
import Insurance from './Insurance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box width={'100%'}>
      <Header />
      <Box sx={{'display':'flex'}}>
        <Sidebar />
        <Insurance />
      </Box>
      {/*<Footer />*/}
    </Box>
  )
}

export default App
