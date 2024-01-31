import { Box } from "@mui/material";

function Footer() {
  return (
    <Box p={1} sx={{
      'color':'white', 
      'backgroundColor':'#1A9C9A', 
      'position':'absolute', 
      'bottom': 0, 
      'width': '100%', 
      'margin': '0 auto'
    }}>
      Copyright © Nkomorcare Technologies Inc. All rights reserved.
    </Box>
  );

}

export default Footer;