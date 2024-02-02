import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Card, CardContent} from "@mui/material";

interface Training {
    exerciseName: string,
    amount: number,
    repeats: number,
    duration: number
}

interface trainingProp {
    training: Training
}
const NewTrainingCard = ({ training }: trainingProp) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {training.exerciseName}
                </Typography>
                <Typography color="textSecondary">
                    Repeat: {training.repeats} | Sets: {training.amount} | Duration: {training.duration} mins
                </Typography>
            </CardContent>
        </Card>
    );
}

export default  NewTrainingCard;
