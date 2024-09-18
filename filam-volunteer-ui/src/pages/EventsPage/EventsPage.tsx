import { Space, Card, Button, Row, Col, Layout } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FilamEvent } from "../../types/FilamEvent";
import { Header, Content } from "antd/es/layout/layout";
import PageHeader from "../../components/PageHeader";
import Search from "antd/es/input/Search";

interface EventPageProps {}

function EventsPage(props: EventPageProps) {
  const [allEvents, setAllEvents] = useState<FilamEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<FilamEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const rsp = await fetch("/events.json");
      const events = await rsp.json();
      setAllEvents(events);
      setFilteredEvents(events);
    };
    fetchEvents();
  }, []);

  function handleSearch(searchText: string): void {
    const foundEvents = allEvents.filter((event) => {
      return (
        event.name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) >
        -1
      );
    });

    setFilteredEvents(foundEvents);
  }

  return (
    <>
      <PageHeader
        title="Events"
        extra={
          <Search
            placeholder="input search text"
            allowClear
            onSearch={handleSearch}
            style={{ width: 304 }}
          />
        }
      ></PageHeader>
      <Content>
        {filteredEvents.map((event) => {
          return (
            <Card
              key={event.id}
              title={event.name}
              cover={
                event.photo && (
                  <img src={`/images/${event.photo}.jpg`} alt="Event logo" />
                )
              }
              style={{ width: 500 }}
            >
              <p>Event Start Date/Time: {event.startDateTime}</p>
              <p>Event End Date/Time: {event.endDateTime}</p>
              <p>Venue: {event.location}</p>
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
      </Content>
    </>
  );
}

export default EventsPage;
