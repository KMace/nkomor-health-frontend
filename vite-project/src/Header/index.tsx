import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from "../assets/logo.png";
import profilepic from "../assets/profilepic.png";

function Header() {
  return (
    <>
      <Box p={2} sx={{'backgroundColor':'#1A9C9A', 'display':'flex', 'justifyContent': 'space-between'}}>
        <Box>
          <img width='175px' src={logo} className="logo" alt="Nkomor logo" />
        </Box>
        <Box sx={{'display':'flex'}}>
          <img height='75px' width='75px' src={profilepic} className="profilepic" alt="Profile pic" />
          <Typography sx={{'margin': 'auto 0 auto 0'}}>Noah Parker <KeyboardArrowDownIcon/></Typography>
        </Box>
      </Box>
    </>
  );
}

export default Header;