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
  isChecked: boolean;
}

const App: FC = () => {
  const [contacts, setContacts] = useState<IPerson[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<IPerson[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [checked, setChecked] = useState<any[]>([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setIsLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    const sortedData = data.sort((a: IPerson, b: IPerson) =>
      a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
    );
    setContacts(sortedData);
    setFilteredContacts(sortedData);
    setIsLoading(false);
  };

  useEffect(() => {
    const newContacts = [];
    for (let i = 0; i < contacts.length; i++) {
      const currentPerson = contacts[i];
      let isChecked = false;
      checked.forEach((id: number) =>
        id === currentPerson.id ? (isChecked = true) : null
      );
      const fullName = `${currentPerson.first_name}${currentPerson.last_name}`.toLowerCase();
      if (fullName.includes(query.replace(/\s/g, '').toLowerCase()))
        newContacts.push({ ...currentPerson, isChecked });
    }

    setFilteredContacts(newContacts);
  }, [query]);

  const handleSelect = (id: number, check: boolean) => {
    if (!check) {
      setChecked((prevState) => [...prevState, id]);
    } else {
      setChecked((prevState) => prevState.filter((el) => el !== id));
    }
    console.log(checked);
  };

  return (
    <>
      <Header />
      <SearchInput getQuery={(q: string) => setQuery(q)} />
      <ul>
        {isLoading ? (
          <div className="text-center mt-3">
            <Spinner animation="border" role="status" variant="info">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
          filteredContacts.map((person: IPerson) => {
            return (
              <li key={person.id}>
                <Person
                  avatar={person.avatar}
                  email={person.email}
                  firstName={person.first_name}
                  id={person.id}
                  lastName={person.last_name}
                  isChecked={
                    person.isChecked === undefined ? false : person.isChecked
                  }
                  getCheck={handleSelect}
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
