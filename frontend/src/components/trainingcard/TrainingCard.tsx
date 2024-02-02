import { Card, CardContent } from "@mui/material";
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
    console.log(training);
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {training.exercise.name}
                </Typography>
                <Typography color="textSecondary">
                    Repeat: {training.repeats} | Sets: {training.amount} | Duration: {training.duration} mins
                </Typography>
            </CardContent>
        </Card>

    );
}

export default  TrainingCard;
