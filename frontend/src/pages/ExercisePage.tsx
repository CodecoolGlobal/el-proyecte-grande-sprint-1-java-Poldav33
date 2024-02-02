import React, { useState, useEffect, useCallback } from "react";
import ExerciseFilter from "../components/exercise/exercise-bar/ExerciseFilter.tsx";
import ExerciseFilterType from "../type/ExerciseFilterType.ts";
import Exercise from "../type/Exercise.ts";
import ExerciseList from "../components/exercise/exerciselist/ExerciseList.tsx";

const type = [
  "cardio",
  "olympic_weightlifting",
  "plyometrics",
  "powerlifting",
  "strength",
  "stretching",
  "strongman",
];
const muscle = [
  "abdominals",
  "abductors",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "lower_back",
  "middle_back",
  "neck",
  "quadriceps",
  "traps",
  "triceps",
];
const difficulty = ["beginner", "intermediate", "expert"];

const fetchExercises = ({
  name,
  type,
  muscle,
  difficulty,
}: ExerciseFilterType): Promise<Exercise[]> => {
  const token: string | null = localStorage.getItem("jwt-token");
  return fetch(
    `/api/exercises/filter?name=${name}&type=${type}&muscle=${muscle}&difficulty=${difficulty}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  ).then((res) => res.json());
};

const ExercisePage = () => {
  const [filter, setFilter] = useState({
    name: "",
    type: "",
    muscle: "",
    difficulty: "",
  });

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [name, setName] = useState<string[]>([]);

  const fetchData = useCallback(() => {
    fetchExercises(filter).then((res) => {
      setExercises(res);
      if (name.length < 1) {
        setName(res.map((response) => response.name));
      }
    });
  }, [filter, name]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    nameValue: string,
    typeValue: string,
    muscleValue: string,
    difficultyValue: string
  ) => {
    e.preventDefault();
    const filterData: ExerciseFilterType = {
      name: nameValue,
      difficulty: difficultyValue,
      type: typeValue,
      muscle: muscleValue,
    };

    setFilter(filterData);
  };

  return (
    <>
      <ExerciseFilter
        name={name}
        type={type}
        muscle={muscle}
        difficulty={difficulty}
        onSubmit={onSubmit}
      />
      <ExerciseList exercises={exercises} />
    </>
  );
};

export default ExercisePage;
