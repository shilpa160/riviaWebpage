import React from "react";
import "./App.css";
import BlogCard from "./compoments/blogCard";
import LargeCard from "./compoments/blogCardLarge";
import Blog from "./pages/blog";
import Careers from "./pages/career";

function App() {
  return (
    <>
      {/* <Careers/> */}
      {/* <BlogCard
        img="https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg"
        title="CI/CD Pipeline in Development"
        category="Technology"
        description="EWRTHFDSDF sfSDF sdF SDFsdfns fn kdklsdghns dlgnoipg hklgoa igag hk aghag haig hg"
      /> */}
      <Blog />
      {/* <LargeCard /> */}
    </>
  );
}

export default App;
