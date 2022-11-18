import { Card, Button } from "antd";
import React from "react";
import "../scss/card.scss";

interface CardProps {
  img?: string;
  title?: string;
  content?: string;
}

const JobCard: React.FC<CardProps> = ({ img, title, content }) => (
  <div className="main-div">
    <div className="card-main">
      <div className="card-img">
        <img src={img} width="80px" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <p>
            <b>{title}</b>
          </p>
        </div>
        <div className="card-desc">
          <p>{content}</p>
        </div>
        <div className="card-button">
          <div className="readmore">
            <Button>ReadMore</Button>
          </div>
          <div className="apply">
            <Button type="primary">Apply</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default JobCard;
