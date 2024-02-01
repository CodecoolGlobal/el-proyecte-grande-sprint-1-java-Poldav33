import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import TrainingCard from "../trainingcard";

interface UserBasicDetail {
    username : string,
    userId: number
}

interface Exercise {
    difficulty : string,
    id : number,
    muscle : string,
    name : string,
    type : string
}

interface Training {
    exercise: Exercise,
    amount: number,
    repeats: number,
    duration: number
}
interface Activity {
    activityId: number,
    user: UserBasicDetail,
    date: Date,
    description: string,
    trainings: Training[]
}
interface ActivityProp {
    activity: Activity
}

const ActivityCard = ({ activity } : ActivityProp) => {
    const [trainings, setTrainings] = useState<Training[]>();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const token : string = localStorage.getItem("jwt-token");
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


    return (
            <Container component={"main"} maxWidth={"xs"}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Grid container spacing={1}>
                        <Grid item>
                            <Typography>
                                {activity.user.username}
                            </Typography>
                            <Typography>
                                {activity.date.toString()}
                            </Typography>
                            <Typography>
                                {activity.description}
                            </Typography>
                            {trainings && trainings.length > 0 && trainings.map((training: Training) =>
                                <TrainingCard training={training}/>)}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    );
}

export default ActivityCard;
