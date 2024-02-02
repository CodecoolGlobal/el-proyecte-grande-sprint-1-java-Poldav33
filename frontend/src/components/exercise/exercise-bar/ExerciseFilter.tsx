import ExerciseSelectButton from "../exercise-select-button";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {ExerciseFilter} from "../../../type/types.ts";
import {useState} from "react";



const ExerciseFilter = ({name, type, muscle, difficulty, onSubmit}: ExerciseFilter) => {

    const [nameValue, setNameValue] = useState<string>("");
    const [typeValue, setTypeValue] = useState<string>("");
    const [muscleValue, setMuscleValue] = useState<string>("");
    const [difficultyValue, setDifficultyValue] = useState<string>("");

    const onChange = (value: string, label: string) => {
        switch (label) {
            case "name":
                setNameValue(value)
                break;
            case "type":
                setTypeValue(value)
                break;
            case "muscle":
                setMuscleValue(value)
                break;
            case "difficulty":
                setDifficultyValue(value)
                break;
        }
    }

    return <>
        <form onSubmit={(e) => onSubmit(e, nameValue, typeValue, muscleValue, difficultyValue)}>
            <Card>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <ExerciseSelectButton label={"name"} value={nameValue} values={name} onChange={onChange} />
                    <ExerciseSelectButton label={"type"} value={typeValue} values={type} onChange={onChange} />
                    <ExerciseSelectButton label={"muscle"} value={muscleValue} values={muscle} onChange={onChange} />
                    <ExerciseSelectButton label={"difficulty"} value={difficultyValue} values={difficulty} onChange={onChange} />
                    <Button type={"submit"}>Search</Button>
                </CardContent>
            </Card>
        </form>
    </>

}

export default ExerciseFilter;