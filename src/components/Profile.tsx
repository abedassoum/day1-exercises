import React from 'react';
import { ProfileProps } from '../types';


// Define the Profile component
const Profile: React.FC<ProfileProps> = ({ name, email, isActive, singleLine }) => {
  return (
    <div>
      {singleLine ? (
        <p>
          {name} - {email} - {isActive ? "Active" : "Inactive"}
        </p>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Status: {isActive ? "Active" : "Inactive"}</p>
        </>
      )}
    </div>
  );
};

export default Profile;

