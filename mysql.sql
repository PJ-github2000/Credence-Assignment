-- -- -- INSERT INTO movies (
-- -- --         id,
-- -- --         name,
-- -- --         image,
-- -- --         summary
-- -- --     )
-- -- -- VALUES (
-- -- --         $ { 1 },
-- -- --         "Harry Potter and the Order of the Phoenix",
-- -- --         "https://bit.ly/2IcnSwz",
-- -- --         "Harry Potter and Dumbledores warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledores authority at Hogwarts and discredit Harry"
-- -- --     ) -- SELECT * FROM movies 

-- -- CREATE TABLE movie (
-- --     id INTEGER PRIMARY KEY AUTOINCREMENT,
-- --     name TEXT NOT NULL,
-- --     image TEXT NOT NULL,
-- --     summary TEXT NOT NULL
-- -- );

INSERT INTO movies (1,name, image, summary)
VALUES 
    ('Harry Potter and the Order of the Phoenix', 'https://bit.ly/2IcnSwz', 'Harry Potter and Dumbledore''s warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledore''s authority at Hogwarts and discredit Harry'),
    ('Inception', 'https://bit.ly/3fgNMNK', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'),
    ('The Shawshank Redemption', 'https://bit.ly/3tBjsXj', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.');

-- SELECT * FROM movie;