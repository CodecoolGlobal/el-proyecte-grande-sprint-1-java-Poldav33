import ExerciseSelectButton from "../exercise-select-button";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

type ExerciseFilterInterface = {
  name: string[];
  type: string[];
  muscle: string[];
  difficulty: string[];
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    nameValue: string,
    typeValue: string,
    muscleValue: string,
    difficultyValue: string
  ) => void;
}

const ExerciseFilter = ({
  name,
  type,
  muscle,
  difficulty,
  onSubmit,
}: ExerciseFilterInterface) => {
  const [nameValue, setNameValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [muscleValue, setMuscleValue] = useState("");
  const [difficultyValue, setDifficultyValue] = useState("");

  const onChange = (value: string, label: string) => {
    switch (label) {
      case "name":
        setNameValue(value);
        break;
      case "type":
        setTypeValue(value);
        break;
      case "muscle":
        setMuscleValue(value);
        break;
      case "difficulty":
        setDifficultyValue(value);
        break;
    }
  };

  return (
    <>
      <form
        onSubmit={(e) =>
          onSubmit(e, nameValue, typeValue, muscleValue, difficultyValue)
        }
      >
        <Card>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ExerciseSelectButton
              label={"name"}
              value={nameValue}
              values={name}
              onChange={onChange}
            />
            <ExerciseSelectButton
              label={"type"}
              value={typeValue}
              values={type}
              onChange={onChange}
            />
            <ExerciseSelectButton
              label={"muscle"}
              value={muscleValue}
              values={muscle}
              onChange={onChange}
            />
            <ExerciseSelectButton
              label={"difficulty"}
              value={difficultyValue}
              values={difficulty}
              onChange={onChange}
            />
            <Button type={"submit"}>Search</Button>
          </CardContent>
        </Card>
      </form>
    </>
  );
};

export default ExerciseFilter;
