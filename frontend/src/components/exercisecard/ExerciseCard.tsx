import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Activity from "../../type/Activity.ts";



const ExerciseCard = ({activity}: any) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title= {activity.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default ExerciseCard;