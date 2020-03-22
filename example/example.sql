-- @block make schema
CREATE SCHEMA ppl;
-- @block create person
CREATE TABLE ppl.person (
  person_id serial PRIMARY KEY,
  name VARCHAR (50) UNIQUE NOT NULL
);
-- @block create note
CREATE TABLE ppl.note (
  note_id serial PRIMARY KEY,
  note TEXT NOT NULL,
  person_id integer not NULL,
  CONSTRAINT note_person_id_fkey FOREIGN KEY (person_id) REFERENCES ppl.person (person_id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);
-- @block insert that hunnnerrr
INSERT INTO ppl.person (name)
VALUES
  ('hunter');
-- @block query hunter
SELECT
  P.name,
  N.note
FROM person P,
  note N
WHERE
  P.name = 'hunter'
  AND P.person_id = N.person_id;
-- @block insert 2 note
INSERT INTO note (person_id, note)
VALUES
  (
    (
      SELECT
        person_id
      FROM person
      WHERE
        name = 'hunter'
    ),
    'enjoys the French language'
  );
---
INSERT INTO note (person_id, note)
VALUES
  (
    (
      SELECT
        person_id
      FROM person
      WHERE
        name = 'hunter'
    ),
    'enjoys learning about postgres'
  );
---