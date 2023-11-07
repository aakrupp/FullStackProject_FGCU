// ReactComponent.tsx

import React, { useEffect, useState } from 'react';
import getEventsForUser from '../api/getEvents'; // Import the Prisma query function

function EventTable({ userId }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Call the Prisma query to retrieve events for the user
    getEventsForUser(userId)
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [userId]);

  return (
    <div>
      <h2>Events where the user is signed up</h2>
      <table>
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
                <td><a href={`./eventDetails/${event.id}`}>{event.id}</a></td>
                <td>{event.event_name}</td>
                <td>{`${event.day}/${event.month}/${event.year}`}</td>
                <td>{event.description || 'No description available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
