// CreateEventPage.tsx

import React from 'react';
import CreateEventForm from '../../components/CreateEventForm';

function CreateEventPage() {
  const handleFormSubmit = (eventData) => {
    // Handle the newly created event data here, e.g., display a success message
    console.log('New event created:', eventData);
  };

  return (
    <div>
      <CreateEventForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default CreateEventPage;
