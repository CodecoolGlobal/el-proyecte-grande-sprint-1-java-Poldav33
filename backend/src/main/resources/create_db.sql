--- Drop Table

DROP TABLE IF EXISTS calories;

--- Create calories

CREATE TABLE calories (
    calories_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    calories_per_hour INT
);

INSERT INTO calories (name, calories_per_hour) VALUES ('water skiing', 354);
INSERT INTO calories (name, calories_per_hour) VALUES ('Running', 835);
INSERT INTO calories (name, calories_per_hour) VALUES ('Hiking', 435);
