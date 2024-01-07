import { Box, Button, Paper, Typography } from "@mui/material";
import InsuranceStepper from "./InsuranceStepper";
import InsuranceDropdown from "./InsuranceDropdown";
import InsurancePlans from "./InsurancePlans";
import SuccessfulPurchase from "./SuccessfulPurchase";

function Insurance() {
  return (
    <>
      <Box sx={{width:'100%'}}>
        <InsuranceStepper />
        <Paper sx={{'padding':3}}>
          <Typography variant='h2'>Insurance</Typography>
          <Box sx={{'display': 'flex', 'alignItems':'center', 'flexDirection':'column'}}>
            <Typography variant='h5'>No insurance yet</Typography>
            <Button sx={{'margin':'20px 0 30px 0', 'color':'white', 'backgroundColor':'#007E7C', 'textTransform': 'none', width:'100%', 'maxWidth':'30%'}}>Explore insurance</Button>
          </Box>
        </Paper>
        <InsuranceDropdown />
        <InsurancePlans />
        <SuccessfulPurchase />
      </Box>
    </>
  )
}

export default Insurance;