
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




