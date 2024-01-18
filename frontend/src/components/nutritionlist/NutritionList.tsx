import {NutritionType} from "../../type/types.ts";
import React from "react";
import BasicCard from "./NutritionCard.tsx";
import "./NutritionList.css";

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
        <div className={"parent"}>
            <form onSubmit={handleSubmit}>
                <input name={"search"} type={"search"}></input>
                <button type={"submit"}>search</button>
            </form>
            <div className={"container"}>
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
