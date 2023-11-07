// EventSignUpsTable.tsx

import React from 'react';

interface EventSignUpsTableProps {
  signUps: any[];
}

function EventSignUpsTable({ signUps }: EventSignUpsTableProps) {
  return (
    <div>
      <h2>Event Sign-Ups</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {signUps.map((signUp) => (
            <tr key={signUp.user_id}>
              <td>{signUp.user_id}</td>
              <td>{signUp.user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventSignUpsTable;
