import ExerciseCard from "../exercisecard/index.ts";
import Exercise from "../../type/Exercise.ts";

interface ExerciseListInterface {
    exercises : Exercise[]
}



const ExerciseList = ({exercises}: ExerciseListInterface) => {
    console.log(exercises);

    return (
        <div className={"activity-container"}>
            {exercises.length > 0 ? exercises.map(
                (activity: Exercise) => <ExerciseCard activity={activity}/>
            ) : ""}
        </div>
    );
}

export default ExerciseList;