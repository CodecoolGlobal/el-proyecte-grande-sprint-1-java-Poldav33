import NewTrainingCard from "../newtrainingcard/NewTrainingCard.tsx";
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
                trainings.map((training : any) => <NewTrainingCard training={training}/>)
            }
        </Box>
    );
}

export default TrainingSummary;
