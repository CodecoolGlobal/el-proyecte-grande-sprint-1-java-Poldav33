import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Training {
    exercise: Exercise,
    amount: number,
    repeats: number,
    duration: number
}

interface Exercise {
    difficulty : string,
    id : number,
    muscle : string,
    name : string,
    type : string
}

interface trainingProp {
    training: Training
}
const TrainingCard = ({ training }: trainingProp) => {
    return (
        <Box>
            <Typography>
                Exercise: {training.exercise.name}
            </Typography>
            <Typography>
                Repeats: {training.repeats}
            </Typography>
            <Typography>
                Amount: {training.amount}
            </Typography>
            <Typography>
                Duration: {training.duration}
            </Typography>
        </Box>
    );
}

export default  TrainingCard;
