import React from "react";
import RecommandedCard from "./RecommandedCard";

const Data = [{
      title: "Senior Backend Developer",
      type: "Full time",
      location: "New York",
      salary: "$800-$1600",
      img: "https://recruiteq-frontend.vercel.app/assets/icons/technology/icon3.png",
    },
    {
      title: "Blockchain Developer",
      type: "Full time",
      location: "New York",
      salary: "$400-$600",
      img: "https://recruiteq-frontend.vercel.app/assets/icons/technology/icon1.png",
    },
    {
      title: "Full Stack Developer",
      type: "Full time",
      location: "New York",
      salary: "$800-$1100",
      img: "https://recruiteq-frontend.vercel.app/assets/icons/technology/icon2.png",
    },
    {
      title: "Backend Developer",
      type: "Full time",
      location: "New York",
      salary: "$400-$600",
      img: "https://recruiteq-frontend.vercel.app/assets/icons/technology/icon2.png",
    },
    {
        title: "Senior Backend Developer",
        type: "Full time",
        location: "New York",
        salary: "$800-$1600",
        img: "https://recruiteq-frontend.vercel.app/assets/icons/technology/icon3.png",
      },
      {
        title: "Blockchain Developer",
        type: "Full time",
        location: "New York",
        salary: "$400-$600",
        img: "https://recruiteq-frontend.vercel.app/assets/icons/technology/icon1.png",
      },
      {
        title: "Full Stack Developer",
        type: "Full time",
        location: "New York",
        salary: "$800-$1100",
        img: "https://recruiteq-frontend.vercel.app/assets/icons/technology/icon2.png",
      },
      {
        title: "Backend Developer",
        type: "Full time",
        location: "New York",
        salary: "$400-$600",
        img: "https://recruiteq-frontend.vercel.app/assets/icons/technology/icon2.png",
      },
  ];

export const RecommandedJobs = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl m-2 p-2 flex flex-col w-[900px] min-h-0 font-sans">
      <h2 className="font-bold text-2xl text-[#212b36] py-4">Recommended Job</h2>
      <div className="flex flex-wrap justify-start gap-4">
        {Data.map((data, index) => (
          <RecommandedCard key={index} Data={data} />
        ))}
      </div>
    </div>
  );
};

export default RecommandedJobs;
