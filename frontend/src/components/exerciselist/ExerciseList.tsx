import ExerciseCard from "../exercisecard/index.ts";
import Activity from "../../type/Activity.ts";
import {useEffect, useState} from "react";

// @ts-ignore
const ExerciseList = (exercises) => {

    return (
        <div className={"activity-container"}>
            {exercises.map(
                (activity: Activity) => <ExerciseCard activity={activity}/>
            )}
        </div>
    );
}

export default ExerciseList;