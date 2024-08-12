import React from "react";
import { Card, Carousel, Image } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const FeaturedPictureCarousel: React.FC = () => {
  return (
    <Card title={<h3>Our Organization</h3>}>
      <Carousel autoplay style={{width:"600px"}}>
        <div>
          <Image src="../../../images/ftrd1.jpg" />
        </div>
        <div>
          <Image src="../../../images/ftrd2.jpg" />
        </div>
        <div>
          <Image src="../../../images/ftrd3.jpg" />
        </div>
        <div>
          <Image src="../../../images/ftrd4.jpg" />
        </div>
      </Carousel>
    </Card>
  );
};

export default FeaturedPictureCarousel;
