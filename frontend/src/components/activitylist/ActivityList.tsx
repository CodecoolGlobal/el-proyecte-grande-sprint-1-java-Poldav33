import ExerciseCard from "../activitycard";
import Activity from "../../type/Activity.ts";
import {useEffect, useState, SetStateAction} from "react";


// @ts-ignore
const ActivityList = () => {
    const [activities, setActivities] = useState<Activity[]>();
    useEffect(() => {
        const getActivities = async () => {
            const promise = await fetch('/api/activities');
            const activities = await promise.json();
            setActivities(activities);
        }
        getActivities();
        }, []);



    return (
        <div className={"activity-container"}>
            {activities.map(
                (activity: Activity) => <ExerciseCard activity={activity}/>
            )}
        </div>
    );
}

export default ActivityList;