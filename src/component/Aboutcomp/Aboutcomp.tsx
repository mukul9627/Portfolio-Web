"use client";
import React from "react";
import Image from "next/image";
import "@/component/Card/card.css";
import "@/app/globals.css";
import { Mail, Github, Linkedin } from "lucide-react";
import Profile from "@/myImage/MukulPro.jpeg";

const Aboutcomp = () => {
  return (
    <>
      <div className="flex flex-col gap-6 bg-white rounded-lg p-4 sm:p-6 w-full mx-auto pt-[22px]">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center lg:text-center lg:items-center w-full lg:w-[27rem] bg-white p-4 rounded-2xl shadow">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
              <Image
                src={Profile}
                alt="Mukul Sharma"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="mt-4 text-2xl text-black font-bold">Mukul Sharma</h2>
            <p className="text-gray-500">Software Engineer</p>
            <div className="flex gap-4 mt-4">
              <a
                href="mailto:example@example.com"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-black"
              >
                <Mail />
              </a>
              <a
                href="https://github.com/mukul9627"
                target="_blank"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-black"
              >
                <Github />
              </a>
              <a
                href="https://in.linkedin.com/in/mukul-sharma-4763791b1"
                target="_blank"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-black"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* About & Skills Section */}
          <div className="flex flex-col gap-6 flex-1 w-full">
            <div className="bg-gray-50 p-4 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-black">🧑‍💻 About Me</h3>
              <p className="text-gray-600">
                I&apos;m a passionate Software Engineer with over 3 years of hands-on
                experience, specializing in React, Next.js, and Node.js. I excel
                at building high-performance web applications and enjoy tackling
                complex challenges with innovative solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-black flex">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-2 mt-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                Technical Skills
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Languages & Frameworks */}
                <div className="bg-gray-50 p-4 rounded-xl shadow">
                  <h4 className="font-medium mb-2 text-black">
                    Languages & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2 text-black">
                    {[
                      "JavaScript",
                      "TypeScript",
                      "React.js",
                      "Astro",
                      "Node.js",
                      "Next.js",
                      "Tailwind Css",
                      "HTML5"
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-200 text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-gray-50 p-4 rounded-xl shadow">
                  <h4 className="font-medium mb-2 text-black">Technologies</h4>
                  <div className="flex flex-wrap gap-2 text-black">
                    {[
                      "Git",
                      "Docker",
                      "AWS",
                      "MySQL",
                      "REST APIs",
                      "GitHub",
                      "Postman",
                      "Jira",
                      "vercel"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-6 bg-white rounded-lg px-4 py-6 w-full mx-auto">
        <div className="flex flex-col gap-6 bg-white rounded-2xl w-full lg:p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-2 text-black">💻 Experience</h3>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-gray-50 p-4 rounded-xl shadow w-full">
              <h3 className="text-xl font-semibold text-black">
                Junior Software Developer, CarryMyPet
              </h3>
              <p className="text-gray-400">(09/2022) – Present</p>
              <ul className="list-disc list-inside mt-2 ml-4 text-gray-600">
                <li>Developed and maintained front-end features using HTML, CSS, JavaScript, Bootstrap, and React.js, ensuring responsive design and optimal performance.</li>
                <li>Worked on backend components using ASP.NET (C#) and SQL Server, implementing RESTful APIs and data operations.</li>
                <li>Deployed and maintained websites on production environments; ensured cross-browser compatibility and mobile responsiveness.</li>
                <li>Collaborated with the QA and product teams using Jira, ensured timely task delivery and agile sprint completion.</li>
                <li>Utilized GitHub for version control and Postman for API testing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="flex flex-col gap-6 bg-white rounded-lg px-4 py-6 w-full mx-auto">
        <div className="flex flex-col gap-6 bg-white rounded-2xl w-full lg:p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-2 text-black">🎓 Education</h3>
          <div className="flex flex-col gap-6 w-full">
            <div className="bg-gray-50 p-4 rounded-xl shadow w-full">
              <h3 className="text-xl font-semibold mb-2 text-black">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-gray-600">
                Shri Guru Ram Rai University, Dehradun, India | Aug. 2020 – Aug. 2022
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 text-gray-600">
                <li>Graduated with a CGPA of 9.0/10.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-black">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-gray-600">
                Shri Guru Ram Rai University, Dehradun, India | Aug. 2017 – Aug. 2020
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 text-gray-600">
                <li>Graduated with a CGPA of 8.9/10.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutcomp;
