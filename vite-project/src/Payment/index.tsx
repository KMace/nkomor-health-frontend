import { Box, Button, Checkbox, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Paper, TextField, Typography } from "@mui/material";
import Visa from "../assets/visa.png";
import MyWallet from "../assets/mymobilewallet.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Payment() {
  return (
    <Box>
      <Typography variant='h4'>Checkout & Payment</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper sx={{'padding':3, 'marginBottom': 2}}>
            <Typography variant='h5'>Payment Method</Typography>
            <List dense sx={{'width':'100%'}}>
              <ListItem sx={{'padding': '10px 0', 'display':'flex','justifyContent':'space-between'}}>
                <Box sx={{'display':'flex'}}>
                  <img src={Visa} width='75px'/>
                  <Box sx={{'paddingLeft': 2}}>
                    <Typography>Alex's Visa Card</Typography>
                    <Typography><b>Ending in 1234</b></Typography>
                  </Box>
                </Box>
                <Checkbox />
              </ListItem>
              <Divider />
              <ListItem sx={{'padding': '10px 0', 'display':'flex','justifyContent':'space-between'}}>
                <Box sx={{'display':'flex'}}>
                  <img src={MyWallet} width='75px'/>
                  <Box sx={{'paddingLeft': 2}}>
                    <Typography>My Mobile Wallet</Typography>
                    <Typography><b>Balance: GHS 10,000</b></Typography>
                  </Box>
                </Box>
                <Checkbox />
              </ListItem>
            </List>
          </Paper>
          <Paper sx={{'padding':3}}>
            <Box sx={{'marginBottom':2, 'display':'flex', 'justifyContent':'space-between'}}>
              <Typography variant='h6'>Or add new card</Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Divider />
            <Box
              component="form"
              sx={{'marginTop':2}}
            >
              <Typography><b>Full Name</b></Typography>
              <TextField
                id="full-name"
                label="Name Surname"
                fullWidth
                sx={{'marginBottom':1}}
              />
              <Typography><b>Card Number</b></Typography>
              <TextField
                id="card-number"
                label="**** **** **** ****"
                fullWidth
                sx={{'marginBottom':1}}
              />
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography><b>Expiration Date</b></Typography>
                  <TextField
                    id="expiration-date"
                    label="DD/MM/YYYY"
                    fullWidth
                    sx={{'marginBottom':1}}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography><b>Security Code</b></Typography>
                  <TextField
                    id="security-code"
                    label="***"
                    fullWidth
                    sx={{'marginBottom':1}}
                  />
                </Grid>
              </Grid>
              <Button sx={{'marginTop':2, 'color':'white', 'backgroundColor':'#007E7C', 'textTransform': 'none'}}>Save</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{'padding':3}}>
            <Typography variant='h6'>Order summary</Typography>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Typography variant='h6'><b>B-Health Single & Joint plan</b></Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h6'><b>GH¢ 6</b></Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Typography variant='h6'><b>Subtotal</b></Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h6'><b>GH¢ 6</b></Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant='h6'>Tax</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h6'><b>GH¢ 1</b></Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Typography variant='h6'><b>Total due today</b></Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h6'><b>GH¢ 7</b></Typography>
              </Grid>
            </Grid>
          </Paper>
          <Button sx={{
            'color':'white', 
            'backgroundColor':'#007E7C', 
            'textTransform': 'none', 
            'width':'100%',
            'marginTop': '20px'
          }}>Pay Now</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Payment;