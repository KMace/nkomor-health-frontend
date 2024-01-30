import { Box, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import Shield from "../../assets/shield.png";
import BimaLogo from "../../assets/bima.png";

function InsurancePlanSummary() {
  return (
    <Box>
      <Box sx={{ display:'flex' }}>
        <img src={BimaLogo} width='25px' />
        <Typography>Bima</Typography>
      </Box>
      <Paper sx={{ 'padding': 4 }}>
        <Typography><b>B-Health Single & Joint plan</b></Typography>
        <Box sx={{ display:'flex', color:'#1A9C9A' }}>
          <Typography>GH¢ 6</Typography>
          <Typography>per month</Typography>
        </Box>
        <Typography>What's included:</Typography>
        <List>
          <ListItem disablePadding>
            <img src={Shield} width='25px'/>
            <ListItemText primary="BIMA Doctor Services" sx={{'paddingLeft':'10px'}} />
          </ListItem>
          <ListItem disablePadding>
            <img src={Shield} width='25px'/>
            <ListItemText primary="Hospital Cover" sx={{'paddingLeft':'10px'}} />
          </ListItem>
          <ListItem disablePadding>
            <img src={Shield} width='25px'/>
            <ListItemText primary="Maternity Hospital Cover" sx={{'paddingLeft':'10px'}} />
          </ListItem>
          <ListItem disablePadding>
            <img src={Shield} width='25px'/>
            <ListItemText primary="Maternity Life Cover" sx={{'paddingLeft':'10px'}} />
          </ListItem>
          <ListItem disablePadding>
            <img src={Shield} width='25px'/>
            <ListItemText primary="Medication Support" sx={{'paddingLeft':'10px'}} />
          </ListItem>
        </List>
      </Paper>
    </Box>
  )
}

export default InsurancePlanSummary;