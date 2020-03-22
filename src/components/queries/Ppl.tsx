import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { allPeopleQuery } from "../../queries";

interface IPerson {
  name: string;
}

export interface IPplProps {}

export const Ppl: React.FC<IPplProps> = props => {
  const { loading, error, data } = useQuery(allPeopleQuery);
  if (loading) {
    return <span>Loading</span>;
  }
  const people: IPerson[] = data?.query?.allPeople?.nodes;
  if (!people) {
    // other errors could probably occur right here.
    return <span>No people found</span>;
  }
  const display = people.map(person => person.name).join(", ");
  return <span>{display}</span>;
  // return <span>Made it through the fiiters. Sanity check.</span>;
};

export default Ppl;
