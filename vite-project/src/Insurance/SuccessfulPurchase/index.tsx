import { Typography } from "@mui/material";
import Success from "../../assets/tick.png";

function SuccessfulPurchase() {
  return (
    <>
      <img src={Success} width='500px'/>
      <Typography variant='h4'>Purchase successful</Typography>
    </>
  )
}

export default SuccessfulPurchase;