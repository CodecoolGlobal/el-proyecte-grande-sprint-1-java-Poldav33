import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Training {
    exercise: number,
    amount: number,
    repeats: number,
    duration: number
}

interface trainingProp {
    training: Training
}
const TrainingCard = ({ training }: trainingProp) => {
    return (
        <Box>
            <Typography>
                Exercise: {training.exercise}
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
