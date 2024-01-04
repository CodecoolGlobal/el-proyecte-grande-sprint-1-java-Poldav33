import {useState, useEffect} from "react";
import ExerciseFilter from "../components/exercise-bar/ExerciseFilter.tsx";
import ExerciseFilterType from "../type/ExerciseFilterType.ts";
import ExerciseList from "../components/exerciselist/ExerciseList.tsx";

const ExercisePage = () => {
    const [filter, setFilter] = useState({
        name: "",
        type: "",
        muscle: "",
        difficulty: ""
    });
    const [loading, setLoading] = useState(true);
    const [exercises, setExercises] = useState([]);

    const name = ["Rickshaw Carry",
    "Single-Leg Press",
    "Landmine twist",
    "Weighted pull-up"]
    const type = ["strongman", "strength"];
    const muscle = ["forearms", "quadriceps", "abdominals", "lats"];
    const difficulty = ["beginner", "intermediate"];

    useEffect(() => {
        fetchData(createFilterDTO());
    }, [filter]);

    const fetchData =  (filters: any) => {
        console.log(filters);
        const response = fetch("/api/exercises/filter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filters)
        }).then(res => res.json())
            .then(res => {
                setExercises(res);
            })
    }

    const createFilterDTO = () => {
        const filterDTOs = [];
        for(const value in filter) {
            if (filter[value].length > 0) {
                console.log(value)
                console.log(filter[value])
                console.log(filter)
                filterDTOs.push({
                    columnName: value,
                    columnValue: filter[value]
                })
            }
        }
        return filterDTOs;
    }

    const onSubmit= (e: any, nameValue: string, typeValue: string, muscleValue: string, difficultyValue: string) => {
        e.preventDefault()
        const filterData: ExerciseFilterType = {
            name: nameValue,
            difficulty: difficultyValue,
            type: typeValue,
            muscle: muscleValue
        }

        setFilter(filterData);
    }

    return (
        <>
            <ExerciseFilter name={name} type={type} muscle={muscle} difficulty={difficulty} onSubmit={onSubmit}/>
            <ExerciseList exercises={exercises}/>
        </>
    );


}

export default ExercisePage;