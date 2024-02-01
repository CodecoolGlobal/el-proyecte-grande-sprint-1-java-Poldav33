import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import ActivityCard from "../components/activitycard";

interface UserBasicDetail {
    userName : string,
    userId: number
}
interface Training {
    exerciseName: string,
    amount: number,
    repeats: number,
    duration: number
}
interface Activity {
    user: UserBasicDetail,
    date: Date,
    description: string,
    trainings: Training[]
}


const ActivityTimeLine = () => {
    const [activities, setActivities] = useState<Activity[]>([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch(`/api/activities`)
        if (response.status === 400) {
            console.log(response.body)
        }
        const activities = await response.json();
        setActivities(activities);
    }
    return (

        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }}
        >
            {activities && activities.map(
                (activity : Activity) => <ActivityCard activity={activity}/>
            )}
        </Box>
    )
}

export default ActivityTimeLine;
