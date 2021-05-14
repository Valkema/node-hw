
/*

CREATE TABLE GroupStud (
  id serial PRIMARY KEY,
  name varchar(100) NOT NULL UNIQUE
);

CREATE TABLE Student (
 id serial PRIMARY KEY,
 fullName varchar(100) NOT NULL,
 age integer NOT NULL CHECK (age > 0 AND age < 100),
 email varchar(40) NOT NULL UNIQUE,
 id_group integer REFERENCES GroupStud(id) ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO GroupStud (name) VALUES
('group1'),
('group2'),
('group3'),
('group4');

INSERT INTO Student (fullName, age, email, id_group) VALUES
('Name1', 17, 'email1@gmail.com', 2),
('Name2', 16, 'email2@gmail.com', 3),
('Name3', 18, 'email3@gmail.com', 3),
('Name4', 20, 'email4@gmail.com', 1),
('Name5', 20, 'email5@gmail.com', 4),
('Name6', 17, 'email6@gmail.com', 4),
('Name7', 17, 'email7@gmail.com', 1),
('Name8', 19, 'email8@gmail.com', 2),
('Name9', 19, 'email9@gmail.com', 3),
('Name10', 18, 'email10@gmail.com', 3);



SELECT * FROM Student WHERE id = 3; 


SELECT GroupStud.name, count(Student.id_group) AS Students_count FROM 
GroupStud JOIN Student ON GroupStud.id=Student.id_group
GROUP BY GroupStud.name
ORDER BY GroupStud.name;


SELECT * FROM Student WHERE Age>=18
ORDER BY Age;


UPDATE Student
SET email = 'new@gmail.com'
WHERE id=3;
SELECT * FROM Student;



DELETE FROM Student
WHERE id=3;

SELECT * FROM Student;



CREATE View group_list AS
(SELECT GroupStud.name, count(Student.id_group) AS Students_count FROM 
GroupStud JOIN Student ON GroupStud.id=Student.id_group
GROUP BY GroupStud.name);

SELECT *
FROM group_list
WHERE Students_count = (SELECT MAX(Students_count) FROM group_list);

*/


