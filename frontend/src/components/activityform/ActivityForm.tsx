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
import TrainingCard from "./trainingcard/TrainingCard.tsx";
import {useNavigate} from "react-router-dom";

interface Training {
    exerciseName: string,
    amount: number,
    repeats: number,
    duration: number
}

interface Activity {
    userId: number,
    date: Date,
    description: string,
    trainingsDTO: Training[]
}

const defaultTheme = createTheme();

const ActivityForm = () => {
    const [date, setDate] = useState<Dayjs>(dayjs());
    const [trainings, setTrainings] = useState<Training[]>([]);
    const navigate = useNavigate();


    const onSave = (training: Training) => {
        setTrainings((trainings) => [...trainings, training]);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        const newActivity: Activity = {
            userId: 1,
            date: new Date(data.get("date") as string),
            description: String(data.get("description")) || '',
            trainingsDTO: trainings
        }
        const response = await fetch("/api/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newActivity)

        }).then((res) => res.json());
        if (response.ok) {
            console.log("Successfull activity save")
        } else if (response.status === 400) {
            console.log("Something went wrong")
        }
        navigate("/home")
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
                                            label="date"
                                            name="date"
                                            value={date}
                                            onChange={(newValue : any) => setDate(newValue)}
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
                    <Box>
                        {trainings && trainings.map((training: Training) => <TrainingCard training={training}/>)}
                    </Box>
                </Box>
                <Grid container
                      spacing={1}
                      sx={{
                          marginTop: 8,
                          marginRight: 5,
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                      }}>

                    <TrainingForm onSave={onSave}/>
                </Grid>
            </Container>
        </ThemeProvider>
        );

}

export default ActivityForm;
