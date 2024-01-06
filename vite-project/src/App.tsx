import './App.css'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Box } from '@mui/material'
import Header from './Header'
import Insurance from './Insurance'
import Payment from './Payment'

function App() {
  return (
    <Box width={'100%'}>
      <Header />
      <Box sx={{'display':'flex'}}>
        <Sidebar />
        <Box sx={{'backgroundColor':'#F6F6F6', 'padding': '20px 75px'}}>
          <Insurance />
          <Payment />
        </Box>
      </Box>
      {/*<Footer />*/}
    </Box>
  )
}

export default App
