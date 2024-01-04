import ExerciseCard from "../exercisecard/index.ts";
import Activity from "../../type/Activity.ts";
import {useEffect, useState} from "react";

// @ts-ignore
const ExerciseList = ({exercises}: any) => {
    console.log(exercises);

    return (
        <div className={"activity-container"}>
            {exercises.length > 0 ? exercises.map(
                (activity: Activity) => <ExerciseCard activity={activity}/>
            ) : ""}
        </div>
    );
}

export default ExerciseList;