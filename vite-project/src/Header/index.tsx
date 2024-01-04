import { Box } from "@mui/material";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <Box sx={{'backgroundColor':'#1A9C9A'}}>
        <img src={logo} className="logo" alt="Nkomor logo" />
      </Box>
    </>
  );
}

export default Header;