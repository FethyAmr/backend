CREATE TABLE students (
id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR (30),
ville VARCHAR (30)

);


INSERT INTO students (name, ville ) 
VALUES (
"Véronique", 
  "Paris"

);

INSERT INTO students (name, ville ) 
VALUES (
"Steeven", 
  "Lyon"

);

INSERT INTO students (name, ville ) 
VALUES (
"Marc", 
  "Marseille"

);

INSERT INTO students (name, ville ) 
VALUES (
"Nour", 
  "Lyon"

);

INSERT INTO students (name, ville ) 
VALUES (
"Romain", 
  "Paris"

);

INSERT INTO students (name, ville ) 
VALUES (
"Sophie", 
  "Paris"

);


INSERT INTO languages (name ) 
VALUES (
"French"),
("English"),
("German"),
("Spanish"),
("Mandarin");



INSERT INTO favorites (class, sport,student_id) 
VALUES(
"Maths",
"Cricket",
2),
("Music",
"Hip-Hop",
6),
("Arts",
"Boxing",
1),
("Literature",
"Tennis",
3),
("Computer science",
 "Tennis",
 5),
("Arts",
 "Baseball",
 4);

 create table student_languages(
id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  student_id INT UNSIGNED,
  languages_id INT UNSIGNED
);

INSERT INTO student_languages (student_id, languages_id)
VALUES (
  1,
  1),

(
  1,
  2
),

(
  2,
  1
),

(
  2,
  3
),

(
  3,
  1
),

(
  4,
  1
),

(
  4,
  2
),

(
  4,
  4
),

(
  4,
  5
),

(
  5,
  1
),

(
  5,
  5
),

(
  6,
  1
),

(
  6,
  2
),

(
  6,
  3
);


SELECT * FROM students WHERE id=3
SELECT * FROM students WHERE id=6
SELECT name, ville FROM students WHERE id=1
SELECT name FROM students WHERE id=2
SELECT * FROM students WHERE ville  = "paris"
SELECT * FROM students WHERE ville  = "lyon"