import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface ExerciseSelectButtonInterface {
  label : string,
  value : string
  values :  string[],
  onChange : (value: string, label: string) => void;
}

const ExerciseSelectButton = ({label, value, values, onChange}: ExerciseSelectButtonInterface) => {

  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault();
    onChange(event.target.value, label);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          label={value}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {values && values.map(value => <MenuItem value={value}>
            {value}
          </MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}

export default ExerciseSelectButton;