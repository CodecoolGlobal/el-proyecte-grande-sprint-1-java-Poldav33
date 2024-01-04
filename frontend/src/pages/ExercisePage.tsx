import {useState, useEffect} from "react";
import ExerciseFilter from "../components/exercise-bar/ExerciseFilter.tsx";
import ExerciseFilterType from "../type/ExerciseFilterType.ts";
import ExerciseList from "../components/exerciselist/ExerciseList.tsx";

const ExercisePage = () => {
    const [filter, setFilter] = useState({});
    const [loading, setLoading] = useState(true);
    const [exercises, setExercises] = useState([]);

    const name = ["Rickshaw Carry",
    "Single-Leg Press",
    "Landmine twist",
    "Weighted pull-up"]
    const type = ["strongman", "strength"];
    const muscle = ["forearms", "quadriceps", "abdominals", "lats"];
    const difficulty = ["beginner", "intermediate"];

    const fetchData = async (filters: any) => {
        const response = await fetch("/api/exercises/filter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filters)
        }).then(res => res.json())
            .then(res => {
                setExercises(res)
            })

    }

    const createFilterDTO = () => {
        const filterDTOs = [];
        for(value: Object.keys(filter)) {
            if (filter[value].length > 0) {
                {
                    coloumnName: value,
                    coloumnValue: filter[value]
                }
            }
        }
    }

    const onSubmit= (e: any, nameValue: string, typeValue: string, muscleValue: string, difficultyValue: string) => {
        e.preventDefault()
        const filterData: ExerciseFilterType = {
            name: nameValue,
            difficulty: typeValue,
            type: muscleValue,
            muscle: difficultyValue
        }

        setFilter(filterData);
    }

    return <>
    <ExerciseFilter name={name} type={type} muscle={muscle} difficulty={difficulty}/>
        <ExerciseList exercises={exercises}/>
    </>


}

export default ExercisePage;