import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export default function Salary(props) {
  console.log("VALUE", props)
  
  return (
    <FormControl>
      <RadioGroup
        aria-label="Salary Indication"
        name="salary"
        value={props.value}
        onChange={props.onChange}
        required
      >
        <FormControlLabel value="1000" control={<Radio />} label="0 - 1000" />
        <FormControlLabel value="2000" control={<Radio />} label="1000 - 2000" />
        <FormControlLabel value="3000" control={<Radio />} label="2000 - 3000" />
        <FormControlLabel value="4000" control={<Radio />} label="3000 - 4000" />
        <FormControlLabel value="more" control={<Radio />} label="Over 4000" />
      </RadioGroup>
    </FormControl>
  )
}