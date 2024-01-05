import { Grid } from "@mui/material";
import SinglePlan from "./SinglePlan";

function InsurancePlans() {
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid>
        <SinglePlan />
      </Grid>
      <Grid>
        <SinglePlan />
      </Grid>
      <Grid>
        <SinglePlan />
      </Grid>
    </Grid>
  )
}

export default InsurancePlans;