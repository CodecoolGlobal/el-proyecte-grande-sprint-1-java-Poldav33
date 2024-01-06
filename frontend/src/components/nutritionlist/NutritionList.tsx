import NutritionType  from "../../type/NutritionType.ts";
const NutritionList=(nutrition : NutritionType)=>{
    return (
        <div className={"nutrition"}>
            <div className={"nutrition-name"}>
                {nutrition.name}
            </div>
            <div className={"nutrition-calories"}>
                {nutrition.calories}
            </div>
            <div className={"nutrition-fat"}>
                {nutrition.fat_total_g}
            </div>
            <div className={"nutrition-carbohydrates"}>
                {nutrition.carbohydrates_total_g}
            </div>
            <div className={"nutrition-fiber"}>
                {nutrition.fiber_g}
            </div>

        </div>
    )

}
export  default  NutritionList;
