import React from "react";
import FeaturedPost from "../FeaturedPosts/FeaturedPost";
import featuredStyles from "./featured.module.css";

const data = [
  {
    img: "https://designshack.net/wp-content/uploads/placehold.jpg",
    title: "Designing Dashboards",
    date: "2020",
    tags: ["dashboard"],
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const Featured = () => {
  return (
    <section>
      <p className={featuredStyles.title}>featured works</p>
      {data.map((item) => {
        return (
          <FeaturedPost
            date={item.date}
            title={item.title}
            tag={item.tags[0]}
            body={item.body}
            img={item.img}
          />
        );
      })}
    </section>
  );
};

export default Featured;
