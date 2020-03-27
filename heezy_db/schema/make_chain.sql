CREATE TABLE ppl.chain (
  chain_id serial PRIMARY KEY,
  name TEXT NOT NULL,
);

-- I want these made automatically when a precursor cnote id is set, referring to a note, that does not have a chain2cnote item
