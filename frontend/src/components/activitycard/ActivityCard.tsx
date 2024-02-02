import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import TrainingCard from "../trainingcard";
import Avatar from "@mui/material/Avatar";
import {Card, CardContent} from "@mui/material";
import {Training, ActivityProp} from '../../type/types.ts';


const ActivityCard = ({ activity } : ActivityProp) => {
    const [trainings, setTrainings] = useState<Training[]>([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () : Promise<void> => {
        const token  : string  = localStorage.getItem("jwt-token")!;
        const response = await fetch(`/api/trainings?activityId=${activity.activityId}`,{
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
        if (response.status === 400) {
            console.log(response.body)
        }
        const trainings = await response.json();
        setTrainings(trainings);
    }

    console.log(activity);
    return (
        <Card>
            <CardContent>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Avatar alt={activity.user.username} src={`https://robohash.org/${activity.user.username}`} />
                        <Box marginLeft={2}>
                            <Typography variant="h6">{activity.user.username}</Typography>
                            <Typography color="textSecondary">{activity.date.toString().substring(0,10)}</Typography>
                        </Box>
                    </Box>
                </Box>

                <Typography variant="body1" style={{ marginTop: 16 }}>
                    {activity.description}
                </Typography>

                <Box marginTop={2}>
                    {trainings && trainings.length && trainings.map((training, index) => (
                        <TrainingCard key={index} training={training} />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}

export default ActivityCard;
