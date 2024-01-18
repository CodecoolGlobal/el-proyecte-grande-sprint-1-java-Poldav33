import React, {useState, useEffect} from "react";
import ExerciseFilter from "../components/exercise-bar/ExerciseFilter.tsx";
import {useState, useEffect} from "react";
import ExerciseFilter from "../components/exercise/exercise-bar/ExerciseFilter.tsx";
import ExerciseFilterType from "../type/ExerciseFilterType.ts";
import ExerciseList from "../components/exerciselist/ExerciseList.tsx";
import Exercise from "../type/Exercise.ts";
import ExerciseList from "../components/exercise/exerciselist/ExerciseList.tsx";

const ExercisePage = () => {
    const [filter, setFilter] = useState({
        name: "",
        type: "",
        muscle: "",
        difficulty: ""
    });
    const [exercises, setExercises] = useState<Exercise[]>([]);

    const name = ["Rickshaw Carry",
    "Single-Leg Press",
    "Landmine twist",
    "Weighted pull-up"]
    const type = ["strongman", "strength"];
    const muscle = ["forearms", "quadriceps", "abdominals", "lats"];
    const difficulty = ["beginner", "intermediate"];

    useEffect(() => {
        fetchData();
    }, [filter]);

    const fetchData =  () => {
        const token = localStorage.getItem("jwt-token");
        console.log(token);
        const response = fetch(`/api/exercises/filter?name=${filter.name}&type=${filter.type}&muscle=${filter.muscle}&difficulty=${filter.difficulty}`, {
            headers: {
                "Authorization": "Bearer " + token,
            }
            })
            .then(res => res.json())
            .then((res) => {
                console.log(response)
                setExercises(res);
            })
    }

    const onSubmit= (e: React.FormEvent<HTMLFormElement>, nameValue: string, typeValue: string, muscleValue: string, difficultyValue: string) => {
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