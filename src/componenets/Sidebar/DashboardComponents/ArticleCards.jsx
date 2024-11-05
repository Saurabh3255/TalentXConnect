import React from "react";
import { CgProfile } from "react-icons/cg";

const ArticleCards = ({ Data }) => {
    const { name, info, date, time, status, domain, img } = Data;
  
    return (
      <article className="m-3 border-0 border-gray-300 shadow rounded-lg h-[125px] w-[520px] flex justify-between items-center p-3"> {/* Increased height and width */}
        <div className="flex flex-col justify-between flex-grow">
          <span className="gap-1 flex items-center">
            <CgProfile />
            <h1 className="ml-1 text-2xl font-semibold">{name}</h1> {/* Increased text size */}
          </span>
          <a
            className="font-light text-xl text-blue-500 hover:underline"
            href="https://recruiteq-frontend.vercel.app/404"
          >
            A memorial to old technology
          </a>
          <p className="text-md text-gray-600">{info}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{date}</span>
            <span>{time}</span>
            <span>{status}</span>
            <span className="border-0 bg-slate-300 px-2 rounded-lg">
              {domain}
            </span>
          </div>
        </div>
        <img
          className="rounded-lg ml-2 h-[100px] object-cover" // Increased height for image
          src={img}
          alt={`Article by ${name}`} // Descriptive alt text
        />
      </article>
    );
  };

export default ArticleCards;
