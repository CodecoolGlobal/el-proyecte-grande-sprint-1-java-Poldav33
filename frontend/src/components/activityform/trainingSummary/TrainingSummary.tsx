import NewTrainingCard from "../newtrainingcard/NewTrainingCard.tsx";
import Box from "@mui/material/Box";
import { Trainings } from "../../../type/types.ts";


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
