import { Box, Button, Typography } from "@mui/material";
import InsuranceStepper from "../InsuranceStepper";
import InsuranceDropdown from "../InsuranceDropdown";
import InsurancePlans from "../InsurancePlans";

function Insurance() {
  return (
    <>
      <Box sx={{width:'100%', 'padding': '20px 75px'}}>
        <InsuranceStepper />
        <Typography variant='h2'>Insurance</Typography>
        <Box sx={{'display': 'flex', 'alignItems':'center', 'flexDirection':'column'}}>
          <Typography variant='h5'>No insurance yet</Typography>
          <Button sx={{'color':'white', 'backgroundColor':'#007E7C', 'textTransform': 'none', width:'100%', 'maxWidth':'30%'}}>Explore insurance</Button>
        </Box>
        <InsuranceDropdown />
        <InsurancePlans />
      </Box>
    </>
  )
}

export default Insurance;