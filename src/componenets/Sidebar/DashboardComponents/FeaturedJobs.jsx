    import React from "react";


    const FeaturedJobs = (props) => {
        const { data } = props;
        const { title, company, location, postedDate, salaryRange, skills, affiliation } = data;
    
        return (
            <div className="h-[420px] w-[950px] bg-white-100 rounded-2xl shadow-xl p-5 space-y-4">
                {/* Header with title */}
                <div className="flex justify-between items-center">
                    <span className="px-2 py-1 text-2xl font-normal border-b bg-blue-100 rounded-md">
                        Featured Jobs ★
                    </span>
                </div>
    
                {/* Job title */}
                <h1 className="font-semibold text-[40px] text-[#212b36]">{title}</h1>
    
                {/* Company and Salary information */}
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-medium text-lg">{company}</h4>
                        <p className="text-gray-600">{location} • {postedDate}</p>
                    </div>
                    <div className="text-right">
                        <h2 className="text-[25 px] font-semibold text-[#212b36]">Salary Range</h2>
                        <p className="text-[29px] font-semibold ">{salaryRange}</p>
                    </div>
                </div>
    
                <div>
                    <h2 className="text-lg font-semibold">Skills</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="bg-blue-100 px-2 py-1 rounded-md">{skill}</span>
                        ))}
                    </div>
                </div>
    
                {/* Affiliation and Buttons */} 
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-lg font-medium">Affiliation:</span>
                        <p className="text-[25px]">{affiliation}</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Apply Now</button>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Share</button>
                    </div>
                </div>
            </div>
        );
    };
    

    export default FeaturedJobs;
