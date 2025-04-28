"use client";
import React from "react";
import Image from 'next/image';
import "@/component/Card/card.css";
import "@/app/globals.css";
import Accordion from "@/component/AccordionItem/Accordion";
import { Mail, Github, Linkedin } from 'lucide-react';
import Profile from '@/myImage/MukulPro.jpg';

const Aboutcomp = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg p-6 max-w-7xl pt-[22px]">
        {/* Left Column - Info */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-2xl max-w-6xl mx-auto">
          {/* Left Side - Profile */}
          <div className="flex flex-col items-center text-center md:text-left w-[27rem] shadow">
            <div className="w-40 h-40 rounded-full overflow-hidden">
              <Image
                src={Profile} // ✅ Use the imported image variable directly
                alt="Mukul Sharma"
                width={160}
                height={160}
                className="object-cover"
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
                href="https://github.com/"
                target="_blank"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-black"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-black"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Right Side - About + Skills */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="bg-gray-50 p-4 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-black">🧑‍💻 About Me</h3>
              <p className="text-gray-600">
                I'm a passionate Software Engineer with over 4 years of hands-on coding experience, specializing in React, Next.js, and Node.js. I excel at building high-performance web applications and enjoy solving complex challenges with innovative solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">💻 Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl shadow">
                  <h4 className="font-medium mb-2 text-black">Languages & Frameworks</h4>
                  <div className="flex flex-wrap gap-2 text-black">
                    {['JavaScript', 'TypeScript', 'Python', 'React', 'Astro', 'Node.js', 'Next.js'].map((skill) => (
                      <span key={skill} className="bg-gray-200 text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl shadow">
                  <h4 className="font-medium mb-2 text-black">Technologies</h4>
                  <div className="flex flex-wrap gap-2 text-black">
                    {['Git', 'Docker', 'AWS', 'GraphQL', 'REST APIs'].map((tech) => (
                      <span key={tech} className="bg-gray-200 text-sm px-3 py-1 rounded-full">
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

      <div className="flex flex-col gap-6 bg-white rounded-lg px-4 max-w-7xl mx-auto">
  <h3 className="text-xl font-semibold mb-2 text-black">💻 Experience</h3>
  <div className="flex flex-col gap-6 flex-1">
    <div className="bg-gray-50 p-4 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2 text-black">🧑‍💻 About Me</h3>
      <p className="text-gray-600">
        I'm a passionate Software Engineer with over 4 years of hands-on coding experience, specializing in React, Next.js, and Node.js. I excel at building high-performance web applications and enjoy solving complex challenges with innovative solutions.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2 text-black">💻 Technical Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-xl shadow">
          <h4 className="font-medium mb-2 text-black">Languages & Frameworks</h4>
          <div className="flex flex-wrap gap-2 text-black">
            {['JavaScript', 'TypeScript', 'Python', 'React', 'Astro', 'Node.js', 'Next.js'].map((skill) => (
              <span key={skill} className="bg-gray-200 text-sm px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl shadow">
          <h4 className="font-medium mb-2 text-black">Technologies</h4>
          <div className="flex flex-wrap gap-2 text-black">
            {['Git', 'Docker', 'AWS', 'GraphQL', 'REST APIs'].map((tech) => (
              <span key={tech} className="bg-gray-200 text-sm px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Aboutcomp;


