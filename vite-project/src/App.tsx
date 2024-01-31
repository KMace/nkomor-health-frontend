import './App.css'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function App() {
  return (
    <Box sx={{'minHeight':'100vh', 'backgroundColor':'#F6F6F6'}}>
      <Header />
      <Box sx={{'display':'flex'}}>
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
