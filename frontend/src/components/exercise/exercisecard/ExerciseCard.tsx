import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Exercise from "../../type/Exercise.ts";

interface ExerciseCardInterface {
    activity : Exercise
}

const ExerciseCard = ({activity}: ExerciseCardInterface) => {
    return (
        <Card
              sx={{
                  width: 345,
                  mt: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '0.2rem solid #42a5F5'
              }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {activity.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {activity.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {activity.muscle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {activity.difficulty}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default ExerciseCard;