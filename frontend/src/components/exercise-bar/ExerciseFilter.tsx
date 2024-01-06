import ExerciseSelectButton from "../exercise-select-button";
import {useState} from "react";

const exerciseFilter = ({name, type, muscle, difficulty, onSubmit}: any) => {

    const [nameValue, setNameValue] = useState("");
    const [typeValue, setTypeValue] = useState("");
    const [muscleValue, setMuscleValue] = useState("");
    const [difficultyValue, setDifficultyValue] = useState("");

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
            <ExerciseSelectButton label={"name"} value={nameValue} values={name} onChange={onChange} />
            <ExerciseSelectButton label={"type"} value={typeValue} values={type} onChange={onChange} />
            <ExerciseSelectButton label={"muscle"} value={muscleValue} values={muscle} onChange={onChange} />
            <ExerciseSelectButton label={"difficulty"} value={difficultyValue} values={difficulty} onChange={onChange} />
            <button type={"submit"}>Search</button>
        </form>
    </>

}

export default exerciseFilter;