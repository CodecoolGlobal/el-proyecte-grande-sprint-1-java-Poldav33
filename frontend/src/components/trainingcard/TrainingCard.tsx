import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { TrainingProp } from "../../type/types.ts";

const TrainingCard = ({ training }: TrainingProp) => {
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
