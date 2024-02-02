import React, {useState, useEffect} from "react";
import ExerciseFilter from "../components/exercise/exercise-bar/ExerciseFilter.tsx";
import ExerciseFilterType from "../type/ExerciseFilterType.ts";
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

    const [name, setName] = useState<string[]>([]);
    const type = [
        "cardio", "olympic_weightlifting", "plyometrics", "powerlifting", "strength", "stretching", "strongman"
    ];
    const muscle = [
        "abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes",
        "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps"]
    const difficulty = ["beginner", "intermediate", "expert"];

    useEffect(() => {
        fetchData();
    }, [filter]);

    const fetchData =  () => {
        const token : string | null  = localStorage.getItem("jwt-token");
        console.log(token);
        fetch(`/api/exercises/filter?name=${filter.name}&type=${filter.type}&muscle=${filter.muscle}&difficulty=${filter.difficulty}`, {
            headers: {
                "Authorization": "Bearer " + token,
            }
            })
            .then((res) => {
                const response = res.json()
                console.log(response);
                return response;
            })
            .then((res) => {
                console.log(res)
                setExercises(res);
                if (name.length < 1) {
                    setName(res.map(response => response.name));
                    console.log(name)
                }
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