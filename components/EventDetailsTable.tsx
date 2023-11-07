import React from 'react';

interface EventDetailsTableProps {
  eventDetails: any;
}

function EventDetailsTable({ eventDetails }: EventDetailsTableProps) {
  return (
    <div>
      <h2>Event Details</h2>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Event Type</th>
            <th>Max Sign-up</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{eventDetails.event_name}</td>
            <td>{`${eventDetails.day}/${eventDetails.month}/${eventDetails.year}`}</td>
            <td>{eventDetails.event_type.name}</td>
            <td>{eventDetails.max_signup}</td>
            <td>{eventDetails.description || 'No description available'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EventDetailsTable;
