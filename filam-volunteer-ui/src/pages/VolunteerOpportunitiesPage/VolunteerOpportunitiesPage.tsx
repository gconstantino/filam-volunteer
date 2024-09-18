import { Row, Select, SelectProps, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { FilamJob } from "../../types/FilamJobs";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FilamEvent } from "../../types/FilamEvent";
import PageHeader from "../../components/PageHeader";
import Search from "antd/es/input/Search";

interface VolunteerOpportunitiesPageProps {}

function VolunteerOpportunitiesPage(props: VolunteerOpportunitiesPageProps) {
  const [allJobs, setAllJobs] = useState<FilamJob[]>([]);
  const [allEvents, setAllEvents] = useState<FilamEvent[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<FilamJob[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const eventId = searchParams.get("eventId");
  const queryText = searchParams.get("query");

  
  
  const getEventSelectOptions = () => {
    let eventSelectOptions: SelectProps['options'] = [];

    eventSelectOptions.push({ label: 'All', value: null });
    
    eventSelectOptions = eventSelectOptions.concat(allEvents.map((event) => {
        return { value: event.id, label: event.name};
      }));

    return eventSelectOptions;
  }


  useEffect(() => {
    const fetchJobs = async () => {
      const rsp = await fetch("/jobs.json");
      const jobs = await rsp.json();
      setAllJobs(jobs);
    };
    fetchJobs();

    const fetchEvents = async () => {
      const rsp = await fetch("/events.json");
      const jobs = await rsp.json();
      setAllEvents(jobs);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    const matchingJobs = allJobs.filter((job) => {
      return (
        (eventId ? job.eventId.toString() === eventId : true) &&
        (queryText
          ? job.name
              .toLocaleLowerCase()
              .indexOf(queryText.toLocaleLowerCase()) > -1
          : true)
      );
    });

    setFilteredJobs(matchingJobs);
  }, [allJobs, eventId, queryText]);

  function handleSearch(searchText: string): void {
    if (searchText) {
      setSearchParams({ query: searchText });
    } else {
      setSearchParams();
    }
  }

  function handleEventChange(value: string, option: any): void {
    if (value) {
        setSearchParams({eventId: value});
    } else {
        setSearchParams();
    }
  }


  const columns: ColumnsType<FilamJob> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Points",
      dataIndex: "points",
      key: "points",
    },
    {
      title: "Event",
      key: "eventId",
      dataIndex: "eventId",
      render: (_, record) => {
        const matchingEvent = allEvents?.filter((event) => {
          return event.id == record.eventId;
        });
        return <>{matchingEvent ? matchingEvent[0]?.name : ""}</>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Sign Up</a>
        </Space>
      ),
    },
  ];

  
  return (
    <>
      <PageHeader title="Volunteer Opportunities">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={handleSearch}
          style={{ width: 304 }}
        />
        <Select
          style={{ width: 200 }}
          onChange={handleEventChange}
          placeholder='Select an Event'
          options={getEventSelectOptions()}
        />
      </PageHeader>
      <Table columns={columns} dataSource={filteredJobs} />
    </>
  );
}

export default VolunteerOpportunitiesPage;
