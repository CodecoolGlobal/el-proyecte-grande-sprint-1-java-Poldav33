import {NutritionType} from "../../type/types.ts";
import React from "react";
import BasicCard from "./NutritionCard.tsx";
import "./NutritionList.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
        <Box className={"parent"}>
            <form onSubmit={handleSubmit}>
                <TextField sx={{margin : 2}} label="Ingridient" size="small" name={"search"} type={"search"}></TextField>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2.2, mb: 2 }}
                >
                    Search
                </Button>
            </form>
            <div className={"container"}>

                {nutrition && nutrition.map((nut: NutritionType) => (
                    <div key={nut.name}>
                        <BasicCard nutrition={nut}/>
                    </div>
                ))}


            </div>
        </Box>
    )
}

export  default  NutritionList;
