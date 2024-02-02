import ExerciseCard from "../exercisecard";
import Box from "@mui/material/Box";
import {ExerciseList} from "../../../type/types.ts";


const ExerciseList = ({exercises}: ExerciseList) => {
    console.log(exercises);

    return (
        <Box className={"activity-container"}
             sx={{
                 display: 'flex',
                 flexDirection: 'row',
                 flexWrap: 'wrap',
                 justifyContent: 'space-around',
                 alignItems: 'center',
                 marginLeft: 'auto',
                 marginRight: 'auto'
             }}>
            {exercises.length > 0 ? exercises.map(
                (activity) => <ExerciseCard exercise={activity}/>
            ) : ""}
        </Box>
    );
}

export default ExerciseList;