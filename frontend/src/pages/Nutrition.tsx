import {useEffect, useState} from "react";
import NutritionList from "../components/nutritionlist";
import {NutritionType} from "../type/types.ts";


const Nutrition = () => {
    const [nutrition, setNutrition] = useState<NutritionType[]>([]);

    useEffect(() => {
        getNutritions()
    }, []);
    const getNutrition = async (nutrition: string) => {
        const token : string | null = localStorage.getItem("jwt-token");
        const response = await fetch(`/api/nutrition?name=${nutrition}`)
        if (response.status === 400) {
            console.log(response.body)
        }
        if (response.status === 200) {
            const fetchedNutrition = await response.json();
            setNutrition(fetchedNutrition);
        }
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