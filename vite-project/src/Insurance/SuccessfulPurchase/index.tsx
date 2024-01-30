import { Box, Button, Typography } from "@mui/material";
import Success from "../../assets/tick.png";
import { NavLink } from "react-router-dom";

function SuccessfulPurchase() {
  return (
    <Box sx={{
      'display':'flex', 
      'flexDirection': 'column', 
      'justfiyContent': 'center',
      'alignItems': 'center'
    }}>
      <img src={Success} width='500px'/>
      <Box sx={{ 
          'display':'flex', 
          'flexDirection': 'column', 
          'justfiyContent': 'center',
          'alignItems': 'center',
          'marginTop': '20px',
          'textAlign': 'center',
          'maxWidth': '60%'
        }}>
        <Typography variant='h4' sx={{ 'color':'#1A9C9A' }}><b>Purchase complete</b></Typography>
        <Typography variant='h6' sx={{ 'marginTop':'20px' }}><b>You have successfully purchased health insurance! Thank you for your purchase.</b></Typography>
        <Button 
          component={NavLink}
          to={'/profile'}
          sx={{
            'color':'white', 
            'backgroundColor':'#007E7C', 
            'textTransform': 'none', 
            'width':'100%',
            'marginTop': '20px'
          }}>Go to profile</Button>
      </Box>
    </Box>
  )
}

export default SuccessfulPurchase;