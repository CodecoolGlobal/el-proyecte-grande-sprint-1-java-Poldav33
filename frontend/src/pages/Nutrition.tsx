import {useState} from "react";
// @ts-ignore
import  NutritionList from "../components/nutritionlist";


const Nutrition =()=>{
    const [nutrition, setNutrition] = useState([]);
    const [loading, setLoading] = useState(false);

    const getNutrition = async (event: any)=> {
        event.preventDefault();
        setLoading(true);
        const nutrition = await fetch(`/nutrition?name=${event.target.value}`)
        const  fetchedNutrition = await nutrition.json();
        setNutrition(fetchedNutrition);
        console.log(nutrition)
        setLoading(false);
    }
    return (
        <div>
            <form onSubmit={getNutrition}>
                <input type={"text"} placeholder={"search nutrition..."}/>
                <button type="submit">Search</button>
            </form>
            <div>
                {loading && !nutrition ?
                    "loading"
                    :
                    <div>
                        <NutritionList nutrition={nutrition}/>
                    </div>
                }
            </div>
        </div>
    )

}
export  default Nutrition;