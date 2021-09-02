import React, { useState } from 'react';
import 'date-fns';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


function Form() {
    const [ serviceType, setServiceType ] = useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    
    const changeHandler = (e) => {
        setServiceType(e.target.checked)
    }
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
       <>
        <Container maxWidth="md" fixed>
            
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </MuiPickersUtilsProvider>
            <TextField
                required
                id="outlined-required"
                label="Stockwerk"
                variant="outlined"
            />
            <Checkbox
                checked={serviceType}
                onChange={changeHandler}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </Container>
      </>
    )
}


export default Form;