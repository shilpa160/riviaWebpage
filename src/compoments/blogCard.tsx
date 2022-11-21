import { Card, Button } from "antd";
import React from "react";
import "../scss/card.scss";

interface BlogProps {
  img?: string;
  title?: string;
  description?: string;
  category?: string;
}

const BlogCard: React.FC<BlogProps> = ({
  img,
  title,
  description,
  category,
}) => (
  <>
    <Card hoverable style={{ width: 300, marginBottom:20 }} cover={<img src={img} />}>
      <p>{category}</p>
      <Card.Meta title={title} description={description} />
    </Card>
  </>
);

export default BlogCard;
