import { Box, Button, Typography } from "@mui/material";
import InsuranceStepper from "../InsuranceStepper";

function Insurance() {
  return (
    <>
      <Box sx={{width:'100%'}}>
        <InsuranceStepper />
        <Typography variant='h2'>Insurance</Typography>
        <Box sx={{'display': 'flex', 'alignItems':'center', 'flexDirection':'column'}}>
          <Typography variant='h5'>No insurance yet</Typography>
          <Button sx={{'color':'white', 'backgroundColor':'#007E7C', 'textTransform': 'none', width:'100%', 'maxWidth':'30%'}}>Explore insurance</Button>
        </Box>
      </Box>
    </>
  )
}

export default Insurance;