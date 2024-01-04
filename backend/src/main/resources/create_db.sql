--- Drop Table

DROP TABLE IF EXISTS calories;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS exercises;

--- Create calories

CREATE TABLE calories (
    calories_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    calories_per_hour INT
);

CREATE TABLE users(
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

INSERT INTO calories (name, calories_per_hour) VALUES ('water skiing', 354);
INSERT INTO calories (name, calories_per_hour) VALUES ('Running', 835);
INSERT INTO calories (name, calories_per_hour) VALUES ('Hiking', 435);

INSERT INTO users (name, username, password, email)
VALUES ('Geri', 'gerike', 'ekireg', 'geri@geri.geri'),
       ('Dávid', 'polgi', 'iglop', 'polgi@iglop.polgi');

INSERT INTO exercises (name, type, muscle, difficulty)
VALUES
    ('Rickshaw Carry', 'strongman', 'forearms', 'beginner'),
    ('Single-Leg Press', 'strength', 'quadriceps', 'intermediate'),
    ('Landmine twist', 'strength', 'abdominals', 'intermediate'),
    ('Weighted pull-up', 'strength', 'lats', 'intermediate');
