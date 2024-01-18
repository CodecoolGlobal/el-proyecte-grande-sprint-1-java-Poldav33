import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import PlusIcon from "../plusicon/PlusIcon.tsx";

interface onSave{
    onSave: (training: Training) => void
}

interface Training {
    exercise: number,
    amount: number,
    repeats: number,
    duration: number
}


function TrainingForm({ onSave }: onSave)  {
    const [training, setTraining] = useState<Training>({
        exercise: 0,
        amount: 0,
        repeats: 0,
        duration: 0
    });
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setTraining(
            {
                exercise:  Number(data.get('exercise')),
                amount: Number(data.get('amount')),
                repeats: Number(data.get('repeats')),
                duration: Number(data.get('duration'))
            }
        );
        onSave(training);
    }

    return (
        <Box component={"form"} noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container xs={12}>
                <Typography component="h1" variant="h5">
                    1. Training
                </Typography>
                <Grid item xs={10} sx={{ mt: "0.5rem"}}>
                    <TextField
                        required
                        fullWidth
                        id={"exercise"}
                        label={"Exercise "}
                        name={"exercise"}
                    />
                </Grid>
                <Grid item xs={10} sx={{ mt: "0.5rem"}}>
                    <TextField
                        required
                        fullWidth
                        id={"amount"}
                        label={"Amount "}
                        name={"amount"}
                    />
                </Grid>
                <Grid item xs={10} sx={{ mt: "0.5rem"}}>
                    <TextField
                        required
                        fullWidth
                        id={"repeats"}
                        label={"Repeats "}
                        name={"repeats"}
                    />
                </Grid>
                <Grid item xs={10} sx={{ mt: "0.5rem"}}>
                    <TextField
                        required
                        fullWidth
                        id={"duration"}
                        label={"Duration "}
                        name={"duration"}
                    />
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                    variant="contained"
                    endIcon={<PlusIcon />}>
                    Add Training
                </Button>
            </Grid>
        </Box>

    );
}

export default TrainingForm;