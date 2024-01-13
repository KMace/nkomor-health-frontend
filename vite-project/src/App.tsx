import './App.css'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Box sx={{'width':'100%', 'minHeight':'100vh', 'backgroundColor':'#F6F6F6'}}>
      <Header />
      <Box sx={{'display':'flex'}}>
        <Sidebar />
        <Box sx={{'width':'100%','padding': '50px 75px'}}>
          <Outlet />
        </Box>
      </Box>
      {/*<Footer />*/}
    </Box>
  )
}

export default App
