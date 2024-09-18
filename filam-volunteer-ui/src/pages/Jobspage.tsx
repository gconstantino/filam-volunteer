import { Card, Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FilamJob } from "../types/FilamJobs";

interface JobsPageProps {}

function JobsPage(props: JobsPageProps) {
  const [allJobs, setAllJobs] = useState<FilamJob[]>([]);
  const [eventJobs, setEventJobs] = useState<FilamJob[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const rsp = await fetch("/jobs.json");
      const jobs = await rsp.json();
      setAllJobs(jobs);
    };
    fetchJobs();
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const matchingJobs = allJobs.filter((job) => {
      return job.eventId.toString() === id;
    });
    setEventJobs(matchingJobs);
  }, [allJobs, id]);

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

  return <Table rowKey={"id"} columns={columns} dataSource={eventJobs} />;
}

export default JobsPage;
