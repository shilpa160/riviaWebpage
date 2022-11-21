import { Col, Layout, Row } from "antd";
import React from "react";
import "../App.css";
import BlogCard from "../compoments/blogCard";
import LargeCard from "../compoments/blogCardLarge";
import NavBar from "../compoments/header";

function Blog() {
  const { Content } = Layout;
  //   const contentLayout = [

  //   ]
  //   }
  const tempData = [
    {
      img: "https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg",
      title: "CI/CD Pipeline in Development",
      category: "Technology",
      description:
        "EWRTHFDSDF sfSDF sdF SDFsdfns fn kdklsdghns dlgnoipg hklgoa igag hk aghag haig hg",
    },
    {
      img: "https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg",
      title: "CI/CD Pipeline in Development",
      category: "Technology",
      description:
        "EWRTHFDSDF sfSDF sdF SDFsdfns fn kdklsdghns dlgnoipg hklgoa igag hk aghag haig hg",
    },
    {
      img: "https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg",
      title: "CI/CD Pipeline in Development",
      category: "Technology",
      description:
        "EWRTHFDSDF sfSDF sdF SDFsdfns fn kdklsdghns dlgnoipg hklgoa igag hk aghag haig hg",
    },
    {
      img: "https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg",
      title: "CI/CD Pipeline in Development",
      category: "Technology",
      description:
        "EWRTHFDSDF sfSDF sdF SDFsdfns fn kdklsdghns dlgnoipg hklgoa igag hk aghag haig hg",
    },
    {
      img: "https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg",
      title: "CI/CD Pipeline in Development",
      category: "Technology",
      description:
        "EWRTHFDSDF sfSDF sdF SDFsdfns fn kdklsdghns dlgnoipg hklgoa igag hk aghag haig hg",
    },
    {
      img: "https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg",
      title: "CI/CD Pipeline in Development",
      category: "Technology",
      description:
        "EWRTHFDSDF sfSDF sdF SDFsdfns fn kdklsdghns dlgnoipg hklgoa igag hk aghag haig hg",
    },
  ];

  return (
    <>
      <Layout>
        <NavBar />
        <div className="main-content">
          <Content>
            <div className="career-title">
              <h1>We share what we've learned</h1>
              <p className="title-content">
                {
                  "Read our blogs to gain deeper insights on tech, design, work, \n real world events and much more"
                }
              </p>
            </div>

            <div className="content-card">
              <Row className="career-row">
                {tempData.map((data) => (
                  <Col md={6} offset={2}>
                    <BlogCard
                      img={data.img}
                      title={data.title}
                      category={data.category}
                      description={data.description}
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

export default Blog;
