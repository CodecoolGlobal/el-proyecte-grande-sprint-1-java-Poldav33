import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {TrainingDescriptionProp} from "../../type/types.ts";

const TrainingDescription = ({ description }: TrainingDescriptionProp) => {
    return (
        <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
            <Typography variant="h6" gutterBottom>
                Training Description
            </Typography>
            <Typography variant="body1">
                {description}
            </Typography>
        </Paper>
    );
};

export default TrainingDescription;