import {useState} from "react";

const Nutrition =()=>{
    const [nutrition, setNutrition] = useState([]);
    const [loading, setLoading] = useState(false);

    const getNutrition = async (name: String)=> {
        setLoading(true);
        const nutrition = await fetch(`/nutrition?name=${name}`)
        const  fetchedNutrition = await nutrition.json();
        setNutrition(fetchedNutrition);
        console.log(nutrition)
        setLoading(false);
    }
    return (
        <div>
            <input type={"text"} placeholder={"search nutrition..."} onChange={(e)=>getNutrition(e.target.value)}/>
            <div>
                {loading && !nutrition ?
                    "loading"
                    :
                    <div>

                    </div>
                }
            </div>
        </div>
    )

}
export  default Nutrition;