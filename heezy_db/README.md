This is the HEEZY DB, open source whatever-database.

I'm going to iterate on this and see what happens.

General idea is to use graphql alongside this.


# Installation (tested macOS)

Prereqs: Homebrew, macOS

Download postgreSQL with homebrew.

`brew install psql`

`cd /heezy_db`
`psql -f ./hard_reset.sql`

This will create a database called `throwaway` with some mock data.





