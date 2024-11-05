import React from "react";
import FeaturedJobs from "./DashboardComponents/FeaturedJobs";
import UserApplicationData from "./DashboardComponents/UserApplicationData";
import RecommandedJobs from "./DashboardComponents/RecommandedJobs";
import Article from "./DashboardComponents/Article";





const data= [{
  "title": "Frontend Developer",
  "company": "Company Name",
  "location": "Pune, Maharashtra, India",
  "postedDate": "1 d ago",
  "salaryRange": "$5000-$12000",
  "skills": ["Content Writing", "User Interface Design"],
  "affiliation": "$4000"
},]

const cardData=[{
  title:"Total Applications",
  count:"235,110"
},
{
  title:"Total Interviews",
  count:"205,498"
},
{
  title:"Pending Interview",
  count:"854,123"
},
{
  title:"Profile Views",
  count:"54,651"
}
]

function Dashboard() {
  return (
  
      <div className="flex flex-col gap-5 h-screen p-2 m-2">
        <div className="flex justify-normal gap-10">
          <div
            className="h-[420px] w-[650px] bg-slate-100 rounded-2xl shadow-xl box-border"
            style={{ boxShadow: "0px 8px 17px rgba(0, 82, 180, 0.25)" }}
          >
            <h3 className="font-sans text-[40px] m-10 font-semibold text-[#212b36]">
              Welcome back to Synechron Harman Porter
            </h3>
            <p className="font-sans text-[21px] m-10 justify-between text-[#212b36]">
              Person 1: Why do C# and Java developers keep breaking their keyboards?
              <br />
              Person 2: Because they use a strongly typed language.
            </p>
          </div>
          {data.map((job, index) => (
            <FeaturedJobs key={index} data={job} />
          ))}
        </div>
        <div className="flex gap-4">
        {cardData.map((e,i)=> (
          <UserApplicationData key={i} data={e}/>
        ))}
        </div>
        <div className="flex gap-6"> {/* Add a flex container for Article and RecommandedJobs */}
        <RecommandedJobs /> 
        <div className="items-start">
          <Article /> 
        </div>
      </div>
      </div>
 
  );
}

export default Dashboard;
