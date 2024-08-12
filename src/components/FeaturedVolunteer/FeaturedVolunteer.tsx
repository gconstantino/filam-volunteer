import { Card, Spin } from "antd";
import { useEffect, useState } from "react";

interface FeaturedVolunteer {
  id: number;
  name: string;
  month: Date;
  details: string;
  image: string;
}

type FeaturedVolunteerProps = {};

export const FeaturedVolunteer = (props: FeaturedVolunteerProps) => {
  const [loading, setLoading] = useState(true);
  const [featuredVolunteer, setFeaturedVolunteer] = useState<FeaturedVolunteer>();

  async function getFV() {
    const fvs = await fetch("/featuredVolunteers.json");
    const fvsJson = await fvs.json();
    setFeaturedVolunteer(fvsJson[0]);
  }

  useEffect(() => {
    getFV().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Card
      title="Volunteer of the Month"
      style={{ textAlign: "center", fontSize: "30px" }}
    >
      {loading && <Spin />}
      {!loading && featuredVolunteer && (
        <>
          <p style={{ margin: "auto 0" }}>{`${featuredVolunteer.month} 2023`}</p>
          <h4 style={{ margin: "auto 0" }}>
            Thank you, {featuredVolunteer.name}!
          </h4>
          <p><img src={featuredVolunteer.image} style={{width:'200px'}} /></p>
          <p style={{ margin: "auto 0", fontSize: "20px" }}>
            {featuredVolunteer.details}
          </p>
        </>
      )}
    </Card>
  );
};
