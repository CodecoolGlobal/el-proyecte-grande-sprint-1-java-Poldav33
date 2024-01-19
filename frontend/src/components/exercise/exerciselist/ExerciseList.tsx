import ExerciseCard from "../exercisecard";
import Activity from "../../../type/Activity.ts";
import Box from "@mui/material/Box";
import Exercise from "../../../type/Exercise.ts";

interface ExerciseListInterface {
    exercises : Exercise[]
}

const ExerciseList = ({exercises}: ExerciseListInterface) => {
    console.log(exercises);

    return (
        <Box className={"activity-container"}
             sx={{
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 marginLeft: 'auto',
                 marginRight: 'auto'
             }}>
            {exercises.length > 0 ? exercises.map(
                (activity: Activity) => <ExerciseCard activity={activity}/>
            ) : ""}
        </Box>
    );
}

export default ExerciseList;