import {NutritionType} from "../../type/types.ts";
import React from "react";

interface NutritionListProps {
    getNut : (nut : string) => void,
    nutrition : NutritionType[]
}

const NutritionList : React.FC<NutritionListProps> = ({getNut, nutrition}) => {

    function handleSubmit (event : React.FormEvent<HTMLFormElement>)  {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        getNut(data.get("search") as string)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name={"search"} type={"search"}></input>
                <button type={"submit"}>search</button>
            </form>
            <div>
                {nutrition.length > 0 ? (
                    nutrition.map((nut : NutritionType) => (
                        <>
                            <p>{nut.name}</p>
                            <p>{nut.calories}</p>
                            <p>{nut.fat_total_g}</p>
                            <p>{nut.carbohydrates_total_g}</p>
                            <p>{nut.fiber_g}</p>
                        </>
                    ))
                ) : (<>
                    <p>{"csa"}</p>
                    </>)}

            </div>
        </div>
    )
}

export  default  NutritionList;
