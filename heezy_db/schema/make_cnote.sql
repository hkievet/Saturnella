CREATE TABLE ppl.cnote (
  cnote_id serial PRIMARY KEY,
  note TEXT NOT NULL,
  precursor_cnote_id
  person_id integer not NULL,
  CONSTRAINT note_person_id_fkey FOREIGN KEY (person_id) REFERENCES ppl.person (person_id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
  CONSTRAINT precursor_note_id_fkey FOREIGN KEY (precursor_note_id) REFERENCES ppl.cnote (cnote_id) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);