import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ExerciseCard} from "../../../type/types.ts";



const ExerciseCard = ({exercise}: ExerciseCard) => {
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
                    {exercise.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {exercise.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {exercise.muscle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {exercise.difficulty}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default ExerciseCard;