import React from "react";
import FeaturedJobs from "./DashboardComponents/FeaturedJobs";

const data= [{
  "title": "Frontend Developer",
  "company": "Company Name",
  "location": "Pune, Maharashtra, India",
  "postedDate": "1 d ago",
  "salaryRange": "$5000-$12000",
  "skills": ["Content Writing", "User Interface Design"],
  "affiliation": "$4000"
},]

function Dashboard() {
  return (
    <div className="Dashboard">
    <div className="flex justify-normal gap-10 h-screen p-5 m-2">
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
    </div>

  );
}

export default Dashboard;
