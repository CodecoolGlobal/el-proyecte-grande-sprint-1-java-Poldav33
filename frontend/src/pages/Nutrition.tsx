import React, {useState} from "react";
import NutritionList from "../components/nutritionlist";
import {NutritionType} from "../type/types.ts";



const Nutrition = () => {
    const [nutrition , setNutrition] = React.useState<NutritionType[]>([]);
    const [loading, setLoading] = useState(false);

    const getNutrition = async (nutrition : string) => {
        const response = await fetch(`/api/nutrition?name=${nutrition}`)
        const fetchedNutrition = await response.json();
        setNutrition([fetchedNutrition]);
        console.log(nutrition)
    }




    return (
        <div>
            <NutritionList getNut={getNutrition} nutrition={nutrition} />
        </div>
    )

}
export default Nutrition;