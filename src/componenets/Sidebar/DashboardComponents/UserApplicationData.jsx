import React from 'react';

// SampleChart component for the SVG graph
const SampleChart = ({ data }) => {
  const barWidth = 6;
  const barGap = 5;
  const chartWidth = 76;
  const chartHeight = 54;
  const cornerRadius = 3; // Adjust the radius as needed

  const maxValue = Math.max(...data.map(item => item.value));
  const scaleFactor = chartHeight / maxValue;

  return (
    <svg width={chartWidth} height={chartHeight}>
      {data.map((item, index) => (
        <rect
          key={index}
          x={index * (barWidth + barGap)}
          y={chartHeight - item.value * scaleFactor}
          width={barWidth}
          height={item.value * scaleFactor}
          rx={cornerRadius} // Add rounded corners
          ry={cornerRadius}
          fill="rgba(33,73,162,1)"
        />
      ))}
    </svg>
  );
};

const UserApplicationData = (props) => {
  const { data } = props;
  const { title, count } = data;

  const barData = [ // Replace with your actual data
    { value: 50 },
    { value: 70 },
    { value: 30 },
    { value: 60 },
    { value: 80 },
  ];

  return (
    <div
      className="h-[140px] w-[400px] bg-slate-50 rounded-xl box-border flex items-center justify-between p-4"
      style={{ boxShadow: "rgba(145, 158, 171, 0.16) 0px 4px 20px 0px" }}
    >
      {/* Left Section: Title and Count */}
      <div>
        <span className="font-sans font-bold text-[20px] text-[#212b36]">
          {title}
        </span>
        <h4 className="text-[35px] font-semibold text-[#212b36]">{count}</h4>
      </div>

      {/* Right Section: SVG Graph */}
      <div className="w-[76px] h-[54px]">
        <SampleChart data={barData} />
      </div>
    </div>
  );
};

export default UserApplicationData;
