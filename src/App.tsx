import React, { FC, useEffect, useState } from 'react';

import Person from 'components/Person';
import Header from 'components/Header';
import SearchInput from 'components/SerachInput';

import { Spinner } from 'react-bootstrap';

const API_URL =
  'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

interface IPerson {
  avatar: string;
  email: string;
  first_name: string;
  gender: string;
  id: number;
  last_name: string;
}

const App: FC = () => {
  const [contacts, setContacts] = useState<IPerson[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setIsLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setContacts(
      data.sort((a: IPerson, b: IPerson) =>
        a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
      )
    );
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <SearchInput />
      <ul>
        {isLoading ? (
          <div className="text-center mt-3">
            <Spinner animation="border" role="status" variant="info">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
          contacts.map((person: IPerson) => {
            return (
              <li key={person.id}>
                <Person
                  avatar={person.avatar}
                  email={person.email}
                  firstName={person.first_name}
                  id={person.id}
                  lastName={person.last_name}
                />
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default App;
