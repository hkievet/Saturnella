import { gql } from 'apollo-boost';

const CREATE_PERSON = gql`
  mutation($name: String!) {
    createPerson(input: { person: { name: $name } }) {
      person {
        name
      }
    }
  }
`;

interface IPersonDetails {
  name: string;
}

const ErrorText = styled.p`
  color: red;
`;

import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';

export interface ICreatePplProps {}

export const CreatePpl: React.FC<ICreatePplProps> = (props) => {
  const [name, setName] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');
  const [addPerson, { data }] = useMutation<{ addPerson: string }, { name: string }>(
    CREATE_PERSON,
    { variables: { name: name } }
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      addPerson({ variables: { name } }).catch((e) => {
        setError('An Error Occurred');
      });
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Enter Name</label>
      <input
        onChange={(v: any) => {
          setName(v.target.value);
        }}
      />
      {/* BANG!!! */}
      <button disabled={!!!!!name}>Add Person</button>
      <ErrorText>{error}</ErrorText>
    </form>
  );
};

export default CreatePpl;
