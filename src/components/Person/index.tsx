import React, { FC } from 'react';

interface IProps {
  avatar: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
}

const Person: FC<IProps> = ({ avatar, email, firstName, id, lastName }) => {
  return (
    <div className="d-flex align-items-center border-bottom p-1 pr-4">
      {avatar === null ? (
        <div
          className="text-center d-flex align-items-center justify-content-center rounded-circle bg-light border border-secondary"
          style={{ width: '50px', height: '50px' }}
        >
          <p className="m-0 text-secondary font-weight-bold">
            {firstName.charAt(0)}
            {lastName.charAt(0)}
          </p>
        </div>
      ) : (
        <img className="rounded-circle" src={avatar} alt={lastName} />
      )}
      <div className="ml-2">
        <p className="m-0 font-weight-bold">
          {firstName} {lastName}
        </p>
        <p className="m-0 text-secondary" style={{ fontSize: '13px' }}>
          {email}
        </p>
      </div>
      <input
        className="ml-auto"
        type="checkbox"
        name={firstName}
        id={id.toString()}
      />
    </div>
  );
};

export default Person;
