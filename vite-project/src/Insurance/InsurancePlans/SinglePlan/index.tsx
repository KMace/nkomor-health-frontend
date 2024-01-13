import { Box, Button, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import Shield from "../../../assets/shield.png";

function SinglePlan() {
  return (
    <Paper square sx={{'padding': 4, 'maxWidth':'250px', 'borderRadius':'10px'}}>
      <Box sx={{'display':'flex', 'flexDirection':'column', 'alignItems':'center', 'textAlign': 'center'}}>
        <Typography variant='h4' fontWeight='bold' color='#1A9C9A' sx={{'overflowWrap': 'break-word'}}>B-Health Single & Joint</Typography>
        <Box sx={{'margin': '15px 0'}}>
          <Typography variant='h6' color='#1A9C9A'>Starting from</Typography>
          <Typography variant='h4' fontWeight='bold' color='#1A9C9A'>GH¢5</Typography>
        </Box>
        <Button sx={{'color':'white', 'textDecoration':'none', 'backgroundColor': '#007E7C'}}>Buy Now</Button>
      </Box>
      <br/>
      <Typography variant='h6' color='#717171'>Plan includes:</Typography>
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
  )
}

export default SinglePlan;