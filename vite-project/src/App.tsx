import './App.css'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'
import Header from './Header'
import Insurance from './Insurance'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Box width={'100%'}>
      <Header />
      <Box sx={{'display':'flex', 'backgroundColor':'#F6F6F6'}}>
        <Sidebar />
        <Box sx={{'width':'100%','padding': '50px 75px'}}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default App
