import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import ArticleCards from "./ArticleCards";

const Data = [
    {
      name: "Cris",
      info: "I used to be with ‘it’, but then they changed what ‘it’ was.",
      date: "Sept 20",
      time: "5smins",
      status: "read",
      domain: "technology",
      img: "https://recruiteq-frontend.vercel.app/assets/images/article/article1.png",
    },
    {
      name: "Jasmine",
      info: "I used to be with ‘it’, but then they changed what ‘it’ was.",
      date: "Sept 20",
      time: "5smins",
      status: "read",
      domain: "technology",
      img: "https://recruiteq-frontend.vercel.app/assets/images/article/article2.png",
    },
    {
      name: "Joanna",
      info: "I used to be with ‘it’, but then they changed what ‘it’ was.",
      date: "Sept 20",
      time: "5smins",
      status: "read",
      domain: "technology",
      img: "https://recruiteq-frontend.vercel.app/assets/images/article/article3.png",
    },
    {
        name: "Alex",
        info: "I used to be with ‘it’, but then they changed what ‘it’ was.",
        date: "Sept 20",
        time: "5smins",
        status: "read",
        domain: "technology",
        img: "https://recruiteq-frontend.vercel.app/assets/images/article/article3.png",
      },
  ];
  
  const Article = () => {
    return (
      <div className="m-2  w-[630px] h-[610px]  bordeshadow rounded-lg flex flex-col">
        <span className="m-2 py-2 text-2xl text-[#212b36] font-bold font-sans">Articles</span>
        <div className="flex-grow px-8"> {/* Removed overflow handling */}
          {Data.map((item, index) => (
            <ArticleCards key={index} Data={item} />
          ))}
        </div>
      </div>
    );
  };
export default Article;
