import React, { useState, useEffect, ReactNode } from "react";
import { Row, Col, Avatar, Button, Space, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;

type PageHeaderProps = {
    children?: any;
    extra?: ReactNode;
    title?: ReactNode;
    footer?: ReactNode;
    subTitle?: string;
    backUrl?: string;

}

const PageHeader = (props: PageHeaderProps) => {

  return (
    <div className="page-heading my-2">
      <Row align="top" className="mb-1">
        <Col>
          <Space align="start">
            {props.backUrl && (
              <Link to={props.backUrl}>
                <Button icon={<LeftOutlined className="anticon" />} />
              </Link>
            )}
            <div>
              <Title level={2}>{props.title}</Title>
              {props.subTitle && <Text type="secondary">{props.subTitle}</Text>}
              {props.footer && props.footer}
            </div>
          </Space>
        </Col>
        <Col flex="auto" style={{ textAlign: "right" }}>
          <Space>{props.extra}</Space>
        </Col>
      </Row>
      <Row>
      {React.Children.map(props.children, (child, index) => (
      <span key={index} className="page-actions_meta">{child}</span>
    ))}

</Row>

    </div>
  );
};

export default PageHeader;