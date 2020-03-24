-- @block insert a person named Hunter
INSERT INTO ppl.person (name)
VALUES
  ('hunter');
-- @block query hunter
SELECT
  P.name,
  N.note
FROM ppl.person P,
  ppl.note N
WHERE
  P.name = 'hunter'
  AND P.person_id = N.person_id;