import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import PlusIcon from "../plusicon/PlusIcon.tsx";
import React, {useEffect, useState} from "react";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface onSave{
    onSave: (training: Training) => void
}

interface Training {
    exerciseName: string,
    amount: number,
    repeats: number,
    duration: number
}


function TrainingForm({ onSave }: onSave)  {
    const [exerciseName, setExerciseName] = useState<string>("");
    const [training, setTraining] = useState<Training>({
        exerciseName: '',
        amount: 0,
        repeats: 0,
        duration: 0
    });
    const names = ["Rickshaw Carry",
        "Single-Leg Press",
        "Landmine twist",
        "Weighted pull-up"]

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        setTraining(
            {
                exerciseName:  exerciseName,
                amount: Number(data.get('amount')),
                repeats: Number(data.get('repeats')),
                duration: Number(data.get('duration'))
            }
        );
    }
    const handleChange = (event:  SelectChangeEvent) => {
        event.preventDefault();
        setExerciseName(event.target.value);
    };

    useEffect(() => {
        if (training.exerciseName != '') {
            onSave(training);
        }
    }, [training]);

    return (
        <Box component={"form"} noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container xs={12}>
                <Typography component="h1" variant="h5">
                    Training
                </Typography>
                <Grid item xs={10} sx={{ mt: "0.5rem"}}>
                    <InputLabel id="exercise-select">{"Exercise"}</InputLabel>
                    <Select
                        name={"exercise-select"}
                        labelId="exercise-select"
                        id="exercise-select"
                        value={exerciseName}
                        label={exerciseName}
                        onChange={handleChange}
                        sx={{
                            width: "21rem"
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {names && names.map((name: string) => <MenuItem value={name}>
                            {name}
                        </MenuItem>)}

                    </Select>
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