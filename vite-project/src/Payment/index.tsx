import { Box, Button, Checkbox, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Paper, TextField, Typography } from "@mui/material";
import Visa from "../assets/visa.png";
import MyWallet from "../assets/mymobilewallet.png";

function Payment() {
  return (
    <Box>
      <Typography variant='h4'>Checkout & Payment</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper sx={{'padding':3}}>
            <Typography variant='h5'>Payment Method</Typography>
            <List dense>
              <ListItem disablePadding>
                <img src={Visa} width='50px'/>
                <ListItemText primary="Alex's Visa Card"/>
                <ListItemText secondary={<b>Ending in 1234</b>}/>
                <Checkbox />
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <img src={MyWallet} width='50px'/>
                <ListItemText primary="My Mobile Wallet"/>
                <ListItemText secondary={<b>Balance: GHS 10,000</b>}/>
                <Checkbox />
              </ListItem>
            </List>
          </Paper>
          <Paper sx={{'padding':3}}>
            <Typography variant='h6'>Or add new card</Typography>
            <Divider />
            <Box
              component="form"
            >
              <Typography><b>Full Name</b></Typography>
              <TextField
                id="full-name"
                defaultValue="Name Surname"
              />
              <Typography><b>Card Number</b></Typography>
              <TextField
                id="card-number"
                defaultValue="**** **** **** ****"
              />
              <Box sx={{'display':'flex'}}>
                <Typography><b>Expiration Date</b></Typography>
                <TextField
                  id="expiration-date"
                  defaultValue="DD/MM/YYYY"
                />
                <Typography><b>Security Code</b></Typography>
                <TextField
                  id="security-code"
                  defaultValue="***"
                />
              </Box>
              <Button sx={{'color':'white', 'backgroundColor':'#007E7C', 'textTransform': 'none'}}>Save</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Typography variant='h5'>Order summary</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Payment;