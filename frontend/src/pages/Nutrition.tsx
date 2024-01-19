import {useEffect, useState} from "react";
import NutritionList from "../components/nutritionlist";
import {NutritionType} from "../type/types.ts";


const Nutrition = () => {
    const [nutrition, setNutrition] = useState<NutritionType[]>([]);

    useEffect(() => {
        getNutritions()
    }, []);
    const getNutrition = async (nutrition: string) => {
        const response = await fetch(`/api/nutrition?name=${nutrition}`)
        if (response.status === 400) {
            console.log(response.body)
        }
        const fetchedNutrition = await response.json();
        setNutrition(fetchedNutrition);
    }

    async function getNutritions() {
        const response = await fetch("/api/nutritions")
        if (response.status === 400) {
            console.error(response.text)
        }
        const data = await response.json()
        console.log(data)
        setNutrition(data);

    }
    return (
        <div>
            <NutritionList getNut={getNutrition} nutrition={nutrition}/>
        </div>
    )
}
export default Nutrition;