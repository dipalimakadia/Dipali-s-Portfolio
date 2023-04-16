import React from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      uniname: "California State University, Los Angeles",
      degree: "M.Sc in Computer Science (Current)",
      GPA: "3.9/4",
    },
    {
      id: 2,
      uniname: "Manipal Institute of Technology",
      degree: "M.Tech in Computer Science & Information Security",
      GPA: "7.03/10",
    },
    {
      id: 3,
      uniname: "Gujarat Technological University",
      degree: "B.E. in Information Technology",
      GPA: "7.18/10",
    },
  ];

  return (
    <div
      name="education"
      className="bg-black w-full text-white pt-10"
    >
      <div className="md:px-20 px-10 mx-auto flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
          <p className="py-6 text-gray-500">Universities from where I gain knowledge</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {education.map(({ id, uniname, degree, GPA }) => (
            <div key={id} className="shadow-md bg-slate-700 shadow-gray-500 px-5 rounded-lg">
              <div className='rounded-md font-bold text-white-500 duration-200 hover:scale-105 text-center py-4'>
                {degree}
              </div>
              <div className="flex items-center justify-center">
                <div className='rounded-md w-1/2 text-white-600 font-bold text-center'>
                  University:
                </div>
                <div className='rounded-md w-1/2 text-white-600 duration-200 hover:scale-105 text-center'>
                  {uniname}
                </div>
              </div>
              <div className="flex items-center justify-center py-2">
                <div className="w-1/2 text-center text-white-600 font-bold">GPA:</div>
                <div className="w-1/2 text-center text-white-600 duration-200 hover:scale-105">
                  {GPA}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
