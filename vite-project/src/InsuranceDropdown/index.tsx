import { Box, FormControl, InputLabel, ListSubheader, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";

function InsuranceDropdown() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="choose-insurance-company-id">Choose an insurance company</InputLabel>
      <Select
        labelId="choose-insurance-company-label"
        id="choose-insurance-company-select"
        value={age}
        label="Choose an insurance company"
        onChange={handleChange}
      >
        <ListSubheader>Popular carriers</ListSubheader>
        <MenuItem value={1}>BIMA</MenuItem>
        <MenuItem value={2}>Hollard</MenuItem>
        <ListSubheader>All carriers</ListSubheader>
        <MenuItem value={3}>AAA</MenuItem>
        <MenuItem value={3}>ABBBB</MenuItem>
        <MenuItem value={3}>ACCCC</MenuItem>
        <MenuItem value={3}>ADDD</MenuItem>
        <MenuItem value={3}>AEEE</MenuItem>
        <MenuItem value={3}>AEEE</MenuItem>
      </Select>
    </FormControl>
  )
}

export default InsuranceDropdown;