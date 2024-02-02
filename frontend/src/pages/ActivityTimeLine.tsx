import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import ActivityCard from "../components/activitycard";
import { Activity } from "../type/types.ts";

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
                (activity) => <ActivityCard activity={activity}/>
            )}
        </Box>
    )
}

export default ActivityTimeLine;
