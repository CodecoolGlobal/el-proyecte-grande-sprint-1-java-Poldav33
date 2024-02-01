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
