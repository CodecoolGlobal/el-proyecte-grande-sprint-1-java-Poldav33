export interface RegistrationUser {
  username: string;
  email: string;
  password: string;
}

export interface LogInUser {
  username: string;
  password: string;
}

export interface NutritionType {
  name: string;
  calories: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
  fiber_g: number;
}

export interface UserBasicDetail {
  userName: string;
  userId: number;
}

export interface Training {
  exerciseName: string;
  amount: number;
  repeats: number;
  duration: number;
}

export interface Activity {
  user: UserBasicDetail;
  date: Date;
  description: string;
  trainings: Training[];
  activityId: number;
}
