import React, { useEffect, useState } from "react";
import { Button, Card, Space } from "antd";
import { FilamEvent } from "../../../types/FilamEvent";
import { Link } from "react-router-dom";

interface UpcomingEventsProps {}

function UpcomingEvents(props: UpcomingEventsProps) {
  const [allEvents, setAllEvents] = useState<FilamEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const rsp = await fetch("/events.json");
      const events = await rsp.json();
      setAllEvents(events);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <Card title="Recent Volunteer Opportunities">
        {allEvents.map((event: FilamEvent) => {
          return (
            <Card type="inner" key={event.id} title={event.name}>
              <p>Event Start Date/Time: {event.startDateTime}</p>
              <p>Event End Date/Time: {event.endDateTime}</p>
              <Space wrap>
                <Link to={`/events/${event.id}`}>
                  <Button type="primary">More Details</Button>
                </Link>
                <Link to={`/events/${event.id}/jobs`}>
                  <Button type="primary">Jobs Available</Button>
                </Link>
              </Space>
            </Card>
          );
        })}
      </Card>
    </>
  );
}

export default UpcomingEvents;
