import React from 'react'

const RecommandedCard = (props) => {
    const { Data } = props;
    const { title, type, location, salary, img } = Data;
  
    return (
      <div className="flex items-start border rounded-lg shadow-md  w-[410px] gap-2">
        <img src={img} alt={title} className="m-2 h-[78px]" />
        <div className="flex flex-col p-2">
          <span className="font-bold text-lg">{title}</span>
          <span className="text-md">{location}</span>
          <span className="text-md">{salary}</span>
          <span className="text-md text-gray-500">{type}</span>
        </div>
      </div>
    );
  };

export default RecommandedCard