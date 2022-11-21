import { Card, Button } from "antd";
import React from "react";
import "../scss/blog.scss";
interface CardProps {
  src?: string;
  title?: string;
  subtitle?: string;
  width?: number;
}

const LargeCard: React.FC<CardProps> = ({ src, title, subtitle, width }) => (
  <div className="large-card">
    <img src={src} width={width} />
    <div className="card-title-container">
      <p className="card-subtitle">{subtitle}</p>
      <p className="card-title">{title}</p>
    </div>
  </div>
);

export default LargeCard;
