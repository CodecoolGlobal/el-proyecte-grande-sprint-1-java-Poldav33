import React from "react";

export interface RegistrationUser {
    username : string,
    email : string,
    password : string
}
export interface LogInUser {
    username : string,
    password : string,
}

export interface NutritionType {
    name: string,
    calories: number,
    fat_total_g: number,
    carbohydrates_total_g: number,
    fiber_g: number
}

export interface UserBasicDetail {
    username : string,
    userId: number
}

export interface Exercise {
    difficulty : string,
    id : number,
    muscle : string,
    name : string,
    type : string
}
export interface Training {
    exercise: Exercise,
    amount: number,
    repeats: number,
    duration: number
}
export interface Trainings {
    trainings : Training[],
}
export interface NewActivity {
    user: UserBasicDetail,
    date: Date,
    description: string,
    trainings: TrainingWithExerciseName[]
}
export interface Activity {
    activityId: number,
    user: UserBasicDetail,
    date: Date,
    description: string,
    trainings: Training[]
}
export interface ActivityProp {
    activity: Activity
}

export interface TrainingWithExerciseName {
    exerciseName: string,
    amount: number,
    repeats: number,
    duration: number
}

export interface TrainingProp {
    training: TrainingWithExerciseName
}
export interface TrainingDescriptionProp {
    description: string,
}
export interface onSave{
    onSave: (training: TrainingWithExerciseName) => void
}

export interface ExerciseFilter {
    name : string[],
    type : string[],
    muscle :string[],
    difficulty : string[],
    onSubmit : (e : React.FormEvent<HTMLFormElement>,nameValue : string, typeValue : string,
                muscleValue : string, difficultyValue : string) => void
}
export interface ExerciseSelectButton {
    label : string,
    value : string
    values :  string[],
    onChange : (value: string, label: string) => void;
}
export interface ExerciseCard {
    exercise : Exercise,
}
export interface ExerciseList {
    exercises : Exercise[]
}
export interface Setting {
    name: string,
    path: string
}
export interface NutritionCardInterface {
    nutrition : NutritionType
}

export interface NutritionProp {
    nutrition: NutritionType,
}
export interface onSaveRegisterUser {
    onSave : (user : RegistrationUser) => void
}
export interface onSaveLoginUser {
    onSave : (user : LogInUser) => void
}






