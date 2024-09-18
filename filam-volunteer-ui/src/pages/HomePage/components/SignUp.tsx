import React from "react";
import { Button, Card, Space } from "antd";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";

const SignUp: React.FC = () => {
  return (
    <Card>
      <Card type="inner" title="Want to become a member?">
        <Button
          type="primary"
          href="https://docs.google.com/forms/d/e/1FAIpQLSc86BT-6dt31grJmk3pwDsmrT08dfVKSsuz5gcXpNxcEgEP4Q/viewform"
        >
          Apply Now!
        </Button>
      </Card>
      <Card type="inner" title="Want to become a volunteer?">
        <Button
          type="primary"
          href=""
        >
          Sign Up Now!
        </Button>
      </Card>
    </Card>
  );
};
export default SignUp;
