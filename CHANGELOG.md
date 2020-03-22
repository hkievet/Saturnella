# 4.0

implemented CreatePpl:
a form for the Stage that can be used to add a person to my database

Install postgres on mac os with `brew install postgresql`

Create a database using `createdb heezy` to create a database named heezy.

see `/example/example.sql` for some example queries to create the database that this will work with.

`psql heezy` will let you client into the database server from the terminal.

Run this graphQL server and connect it to your postgreSQL database.  Mine is named heezy
`npx postgraphile -c heezy --watch -o`
use the `-o` flag to make CORS work for localhost databases

This will provide a link like this `http://localhost:5000/graphql`

utilize appolo-client (javascript graphql client) to connect to the postgraphile graphql server.

React-wise:
* useMutate
* useQuery
* Apollo provider, Apollo client
* gql``

Future


# 2.1

* Add a CHANGELOG.
* Some cleanup from 2.0


# 2.0

* Took 0.0 and took out only the essentials to continue my research/practice on svgs.

# 0.0

* spun some svg images areound.


