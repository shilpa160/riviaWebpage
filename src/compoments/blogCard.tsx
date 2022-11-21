import { Card, Button } from "antd";
import React from "react";
import "../scss/card.scss";

interface CardProps {
  img?: string;
  title?: string;
  content?: string;
}

const BlogCard: React.FC<CardProps> = ({ img, title, content }) => (
  <>
  <Card 
   hoverable
   style={{ width: 200 }}
  cover={<img src='https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg'/>}
  />
  </>
);

export default BlogCard;
