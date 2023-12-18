import React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Input,
  Button,
  makeStyles,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    background: theme.palette.primary.main,
    color: 'white',
  },
  formControl: {
    marginRight: theme.spacing(2),
    minWidth: 120,
  },
  input: {
    width: '15%',
    marginRight: theme.spacing(2),
  },
  button: {
    width: '10%',
  },
  exportButton: {
    width: '15%',
  },
}));

const Navbar = ({
  filterCriteria,
  handleFilterChange,
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleReset,
  handleExportToExcel,
  handleExportToPDF,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <Select
          value={filterCriteria}
          onChange={handleFilterChange}
          displayEmpty
          input={<Input />}
          variant="outlined"
        >
          <MenuItem value="" disabled>
            All (Form Type)
          </MenuItem>
          <MenuItem value="3phase">3 Phase</MenuItem>
          <MenuItem value="1phase">1 Phase</MenuItem>
          <MenuItem value="HT">HT</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <Select
          value={filterCriteria}
          onChange={handleFilterChange}
          displayEmpty
          input={<Input />}
          variant="outlined"
        >
          <MenuItem value="" disabled>
            All (Form Category)
          </MenuItem>
          <MenuItem value="u/s 135">U/s 135</MenuItem>
          <MenuItem value="u/s 126">U/s 126</MenuItem>
          <MenuItem value="nil">Nil</MenuItem>
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="u/o case">U/O Case</MenuItem>
        </Select>
      </FormControl>

      <TextField
        type="text"
        className={classes.input}
        placeholder="Search by text or number"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="outlined"
      />
      <Button
        onClick={handleSearch}
        className={classes.button}
        variant="contained"
        color="secondary"
      >
        Search
      </Button>
      <Button onClick={handleReset} className={classes.button} variant="outlined">
        Reset
      </Button>
      <Button
        onClick={handleExportToExcel}
        className={classes.exportButton}
        variant="outlined"
      >
        Export to Excel
      </Button>

      <Button
        onClick={handleExportToPDF}
        className={classes.button}
        variant="outlined"
      >
        Export to PDF
      </Button>
    </div>
  );
};

export default Navbar;
