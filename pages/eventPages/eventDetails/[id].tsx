import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EventDetailsTable from '../../../components/EventDetailsTable';
import EventSignUpsTable from '../../../components/EventSignupTable';
import { getEventDetails } from '../../api/getEventsOnId';

function EventPage() {
  const [eventDetails, setEventDetails] = useState(null);
  const router = useRouter();
  const id = Number(router.query.id);

  useEffect(() => {
    const eventId = id; // Replace with the actual event ID
    getEventDetails(eventId)
      .then((data) => {
        setEventDetails(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {eventDetails && (
        <div>
          <EventDetailsTable eventDetails={eventDetails} />
          <EventSignUpsTable signUps={eventDetails.sign_ups} />
        </div>
      )}
    </div>
  );
}

export default EventPage;
