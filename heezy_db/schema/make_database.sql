-- If you run this file on a fresh database, it will install the schema
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