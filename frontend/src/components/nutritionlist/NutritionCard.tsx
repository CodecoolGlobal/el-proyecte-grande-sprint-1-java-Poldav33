import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {NutritionType} from "../../type/types.ts";


interface BasicCardInterface {
    nutrition : NutritionType
}


 const BasicCard : React.FC<BasicCardInterface> =({nutrition}) => {
    return (
        <Card sx={{ maxWidth: 275}} >
            <CardContent>
                <Typography variant="h5" component="div">
                    {nutrition.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {"Ingredients in 100 g"}
                </Typography>
                <Typography variant="body2">
                    {"Calories: " + nutrition.calories + "g"}
                </Typography><Typography variant="body2">
                    {"Fat: " + nutrition.fat_total_g + "g"}
                </Typography><Typography variant="body2">
                    {"Carbohydrates: " + nutrition.carbohydrates_total_g + "g"}
                </Typography><Typography variant="body2">
                    {"Fiber: " + nutrition.fiber_g + "g"    }
                </Typography>
            </CardContent>

        </Card>
    );
}
export  default BasicCard
