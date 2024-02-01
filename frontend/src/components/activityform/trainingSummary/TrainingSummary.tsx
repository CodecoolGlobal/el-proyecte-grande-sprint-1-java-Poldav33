import TrainingCard from "../trainingcard/TrainingCard.tsx";
import Box from "@mui/material/Box";
interface Training {
    exercise: number,
    amount: number,
    repeats: number,
    duration: number
}
interface Trainings {
    trainings : Training[],
}

const TrainingSummary = ({ trainings } : Trainings) => {
    return (
        <Box>
            {
                trainings.map((training : any) => <TrainingCard training={training}/>)
            }
        </Box>
    );
}

export default TrainingSummary;
