import React, { useState} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from "@mui/material/Typography";
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import TrainingForm from "./trainingformcomponent/TrainingForm.tsx";
import PlusIcon from "./plusicon";
import {Button} from "@mui/material";

interface Training {
    exercise: number,
    amount: number,
    repeats: number,
    duration: number
}

interface Activity {
    userid: number,
    date: typeof Date,
    description: string,
    trainings: Training[]
}

const defaultTheme = createTheme();

const ActivityForm = () => {
    const [date, setDate] = useState<Dayjs>(dayjs());
    const [trainings, setTrainings] = useState<Training[]>([]);

    const onSave = (training: Training) => {
        const trainingTemp = [...trainings]
        trainingTemp.push(training);
        setTrainings(trainings);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const data = new FormData(event.currentTarget);

    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component={"main"} maxWidth={"xs"}>
                <CssBaseline />
                <Box
                    component={"form"}
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h3">
                        Add new activity
                    </Typography>
                    <Box>
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <DatePicker
                                            label="Controlled picker"
                                            value={date}
                                            onChange={(newValue) => setDate(newValue)}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sx={{ my: "1rem"}}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                />
                            </Grid>
                            <Grid container xs={10}
                                  sx={{
                                      marginTop: 8,
                                      marginRight: 5,
                                      display: 'flex',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                  }}>

                                <TrainingForm onSave={onSave}/>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        variant="contained"
                        endIcon={<PlusIcon />}>
                        Save Activity
                    </Button>
                </Box>


            </Container>
        </ThemeProvider>
        );

}

export default ActivityForm;
