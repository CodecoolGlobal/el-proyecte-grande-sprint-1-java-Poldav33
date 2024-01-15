
export interface RegistrationUser {
    username : string,
    name : string,
    password : string,
    email : string
}


export interface LogInUser {
    email : string,
    password : string,
}

export interface NutritionType {
    name: string,
    calories: number,
    fat_total_g: number,
    carbohydrates_total_g: number,
    fiber_g: number
}




