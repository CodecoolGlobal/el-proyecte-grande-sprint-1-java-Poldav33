import {useState} from "react";
import NutritionList from "../components/nutritionlist";
import {NutritionType} from "../type/types.ts";


const Nutrition = () => {
    const [nutrition, setNutrition] = useState<NutritionType[]>([]);
    const getNutrition = async (nutrition: string) => {
        const response = await fetch(`/api/nutrition?name=${nutrition}`)
        if (response.status === 400) {
            console.log(response.body)
        }
        const fetchedNutrition = await response.json();
        setNutrition([fetchedNutrition]);
    }
    return (
        <div>
            <NutritionList getNut={getNutrition} nutrition={nutrition}/>
        </div>
    )

}
export default Nutrition;