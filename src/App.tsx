import { Col, Layout, Row } from "antd";
import { title } from "process";
import React from "react";
import "./App.css";
import NavBar from "./compoments/header";
import JobCard from "./compoments/jobCard";
//import {tempData} from '../public/data';

function App() {
  const { Header, Content, Footer } = Layout;
  const tempData = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      title: "Node Js",
      content: "Very nice job come join our team nice salary you will love it",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      title: "Node Js",
      content: "Very nice job come join our team nice salary you will love it",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      title: "Node Js",
      content: "Very nice job come join our team nice salary you will love it",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      title: "Node Js",
      content: "Very nice job come join our team nice sal/ary you will love it",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      title: "Node Js",
      content: "Very nice job come join our team nice salary you will love it",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      title: "Node Js",
      content: "Very nice job come join our team nice salary you will love it",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      title: "Node Js",
      content: "Very nice job come join our team nice salary you will love it",
    },
  ];

  return (
    <>
      <Layout>
        <NavBar />
        <div className="main-content">
          <Content>
            <div className="career-title">
              <h1>Careers at Intopros</h1>
              <p className="title-content">
                {
                  "The tools and technologies used at intopros to deliver \n you the best performing application."
                }
              </p>
            </div>
            <div className="content-card">
              <Row className="career-row">
                {tempData.map((data) => (
                  <Col md={5} offset={4} >
                    <JobCard
                      img={data.img}
                      title={data.title}
                      content={data.content}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Content>
        </div>
      </Layout>
    </>
  );
}

export default App;
