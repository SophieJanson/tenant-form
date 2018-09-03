import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export default function Salary(props) {
  const onChangeHandler = (event) => {
    props.onChange(event)
  }

  return (
    <div>
      <h3>Wonderful, now here's a more personal question. Would you mind telling me how much your gros monthly income is?</h3>
      <FormControl>
        <RadioGroup
          aria-label="Salary Indication"
          name="salary"
          value={props.value}
          onChange={onChangeHandler}
          required
        >
          <FormControlLabel value="0 - 1000" control={<Radio />} label="0 - 1000" />
          <FormControlLabel value="1001 - 2000" control={<Radio />} label="1001 - 2000" />
          <FormControlLabel value="2001 - 3000" control={<Radio />} label="2001 - 3000" />
          <FormControlLabel value="3001 - 4000" control={<Radio />} label="3001 - 4000" />
          <FormControlLabel value="more than 4000" control={<Radio />} label="More than 4000" />
        </RadioGroup>
      </FormControl>
    </div>

  )
}