import { Box, Button, Typography } from "@mui/material";
import Success from "../../assets/tick.png";
import { NavLink } from "react-router-dom";

function SuccessfulPurchase() {
  return (
    <Box sx={{'display':'flex', 'flexDirection': 'column', 'justfiyContent': 'flex-end', 'backgroundColor':'pink'}}>
      <img src={Success} width='500px'/>
      <Typography variant='h4'>Purchase complete</Typography>
      <Typography variant='h6'>You have successfully purchased health insurance! Thank you for your purchase.</Typography>
      <Button component={NavLink} to={'/profile'}>Go to profile</Button>
    </Box>
  )
}

export default SuccessfulPurchase;