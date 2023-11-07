// CreateEventForm.tsx

import React, { useState } from 'react';
import { createEvent } from '../pages/api/postEvent'; // Import the Prisma component

interface EventFormProps {
  onSubmit: (eventData: any) => void;
}

function CreateEventForm({ onSubmit }: EventFormProps) {
  const [eventData, setEventData] = useState({
    event_name: '',
    day: 0,
    month: 0,
    year: 0,
    event_type_id: 0,
    max_signup: 0,
    owner_id: 0,
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const newEvent = await createEvent(eventData);
      onSubmit(newEvent); // Pass the new event data to the parent component
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <input type="text" name="event_name" placeholder="Event Name" onChange={handleChange} />
      {/* Add other input fields for event properties */}
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <button onClick={handleSubmit}>Create Event</button>
    </div>
  );
}

export default CreateEventForm;
