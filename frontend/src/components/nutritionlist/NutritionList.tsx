import {NutritionType} from "../../type/types.ts";
import React from "react";
import BasicCard from "./NutritionCard.tsx";

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

    // @ts-ignore
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
                           <BasicCard nutrition={nut}/>
                        </>
                    ))
                ) : (<>
                    <p>{"search for some nutrition!"}</p>
                    </>)}

            </div>
        </div>
    )
}

export  default  NutritionList;
