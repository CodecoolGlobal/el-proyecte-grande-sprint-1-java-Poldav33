import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TrainingDescription = ({ description }) => {
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