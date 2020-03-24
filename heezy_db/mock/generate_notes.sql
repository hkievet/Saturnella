-- expects there to be people with ids 1 through 3 existing in the database
-- @block insert 2 notes
INSERT INTO ppl.note (person_id, note)
VALUES
  (
    (
      SELECT
        P.person_id
      FROM ppl.person P
      WHERE
        P.person_id = 1
    ),
    'enjoys the French language'
  );
---
INSERT INTO ppl.note (person_id, note)
VALUES
  (
    (
      SELECT
        P.person_id
      FROM ppl.person P
      WHERE
        P.person_id = 1
    ),
    'enjoys learning about postgres'
  );
---