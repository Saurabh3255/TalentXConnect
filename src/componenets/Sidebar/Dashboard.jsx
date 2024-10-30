import React from "react";

function Dashboard() {
  return (
    <div className="flex justify-between gap-4 h-screen p-5 box-border">
      <div
        className="h-[420px] w-[650px] bg-slate-50 rounded-2xl shadow-xl box-border"
        style={{ boxShadow: "0px 8px 17px rgba(0, 82, 180, 0.25)" }}
      >
        <h3 className="font-sans text-[40px] m-10 font-semibold text-[#212b36]">
          Welcome back to Recruiteq Harman Porter
        </h3>
        <p className="font-sans text-[21px] m-10 justify-between text-[#212b36]">
          Person 1: Why do C# and Java developers keep breaking their keyboards?
          <br />
          Person 2: Because they use a strongly typed language.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
