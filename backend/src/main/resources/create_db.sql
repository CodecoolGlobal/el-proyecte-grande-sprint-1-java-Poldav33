--- Drop Table

DROP TABLE IF EXISTS nutritions;
DROP TABLE IF EXISTS app_user;
DROP TABLE IF EXISTS exercises;
DROP TABLE IF EXISTS activitys;
DROP TABLE IF EXISTS trainings;

--- Create calories

CREATE TABLE nutritions (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    calories INT,
    fat_total_g INT,
    carbohydrates_total_g INT,
    fiber_g INT
);

CREATE TABLE app_user(
                      id SERIAL PRIMARY KEY,
                      name TEXT NOT NULL,
                      username TEXT NOT NULL UNIQUE,
                      password TEXT NOT NULL ,
                      email TEXT NOT NULL UNIQUE
);

CREATE TABLE exercises(
                          id SERIAL PRIMARY KEY,
                          name TEXT,
                          type TEXT,
                          muscle TEXT,
                          difficulty TEXT
);

CREATE TABLE activitys(
    id SERIAL PRIMARY KEY,
    user INT REFERENCES app_user(id),
    date TEXT,
    description TEXT,
    trainings INT REFERENCES trainings(id)
);

CREATE TABLE trainings(
    id SERIAL PRIMARY KEY,
    exercise INT REFERENCES exercises(id),
    repeats INT,
    amount INT,
    duration INT,
    activity INT REFERENCES activitys(id)
);

INSERT INTO nutritions(id, name, calories, fat_total_g, carbohydrates_total_g, fiber_g)
VALUES (0, fries, 317, 14, 41, 3),
       (0, fish, 129, 2, 0, 3);

INSERT INTO exercises (id,name, type, muscle, difficulty)
VALUES
    (0,'Rickshaw Carry', 'strongman', 'forearms', 'beginner'),
    (1,'Single-Leg Press', 'strength', 'quadriceps', 'intermediate'),
    (2,'Landmine twist', 'strength', 'abdominals', 'intermediate'),
    (3,'Weighted pull-up', 'strength', 'lats', 'intermediate');

INSERT INTO app_user(id,email,password,username, role)
VALUES
    (1,'polg@gmail.com','asdasd','Polgi', 0),
    (2, 'bob@bob.bob', 'bob', 'bob', 0);
