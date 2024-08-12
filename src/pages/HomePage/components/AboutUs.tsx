import React from "react";
import { Button, Card, Space } from "antd";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";

const AboutUs: React.FC = () => {
  return (
    <Card
    title={<h3>About Us</h3>}
    extra={<a href="http://2021.filamsc.org/">Visit Our Website</a>}>
      <p>
        W E L C O M E to the volunteer center of the Filipino-American
        Association of Greater Columbia, SC (FAAGC), a voluntary organization to
        promote inter-cultural education and understanding. Duly registered and
        incorporated in the state of South Carolina in 1991, FAAGC is an
        IRS-approved 501(c)(3) educational/cultural/charitable non-profit,
        all-volunteer organization.
      </p>
    <Space wrap>
      <Button type="primary" href="http://www.facebook.com/FAAGC/" > <FacebookOutlined /> Visit our FB Community Page</Button>
      <br></br>
      <Button type="primary" href="http://www.facebook.com/groups/filamsc.org/"> <FacebookOutlined /> Visit our FB Members ONLY Group</Button>
      </Space>
    </Card>
  );
};

export default AboutUs;
