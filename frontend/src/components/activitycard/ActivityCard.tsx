import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import TrainingCard from "../trainingcard";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent } from "@mui/material";
import type { Training, Activity } from "../../type/types";

interface ActivityProp {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityProp) => {
  const [trainings, setTrainings] = useState<Training[]>();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwt-token");
      const response = await fetch(
        `/api/trainings?activityId=${activity.activityId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 400) {
        console.log(response.body);
      }
      const trainings = await response.json();
      setTrainings(trainings);
    };

    fetchData();
  }, [activity.activityId]);

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Avatar
              alt={activity.user.userName}
              src={`https://robohash.org/${activity.user.username}`}
            />
            <Box marginLeft={2}>
              <Typography variant="h6">{activity.user.userName}</Typography>
              <Typography color="textSecondary">
                {activity.date.toString().substring(0, 10)}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography variant="body1" style={{ marginTop: 16 }}>
          {activity.description}
        </Typography>

        <Box marginTop={2}>
          {trainings?.map?.((training, index) => (
            <TrainingCard key={index} training={training} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
