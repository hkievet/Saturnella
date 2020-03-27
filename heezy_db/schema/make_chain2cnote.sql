-- connects a cnote to a chain
CREATE TABLE ppl.cnote2chain NOT NULL,
  note_id
  chain_id 
  PRIMARY KEY(note_id, chain_id)
);

-- todo make if doesn't exist when a chain of 2 is created.