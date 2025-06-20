"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import "@/component/Card/card.css";
import "@/app/globals.css";
import Accordion from "@/component/AccordionItem/Accordion";
import SubmissionHeatmap from "@/component/SubmissionHeatmap";


type CardProps = {
  name: string;
  description: string;
  buttonLink: string;
};

const Card: React.FC<CardProps> = ({ name, description, buttonLink }) => {
  const router = useRouter();
  const projectTitle = [
    {
      
      title: "blog-webapplication",
      description:
        "A blog web application built with Next.js, designed for fast performance and easy content management. It features dynamic routing, SEO optimization, and a modern user interface to deliver a seamless reading and publishing experience.",
      languages: "next.js",
      star: 1,
    },
    {
      href: "https://github.com/mukul9627/Portfolio-Web",
      title: "portfolio-site",
      description:
        "A personal portfolio website built using Next.js, Node.js, and Tailwind CSS. It showcases projects, skills, and achievements with a fast, responsive, and modern user interface. The site is optimized for SEO, features smooth navigation with dynamic routing, and is designed for easy customization and scalability.",
      languages: "next.js",
      star: 1,
    },
    {
      title: "task-manager",
      description:"A task management web application built with Next.js, designed to help users efficiently organize, track, and manage their daily tasks. It features dynamic routing, a responsive user interface with Tailwind CSS, and real-time interactions powered by Node.js. The app supports task creation, editing, status updates, and intuitive filtering for improved productivity.",
      languages: "next.js",
      star: 1,
    },
  ];

  return (
    <>
      {/* Card Section */}
      <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg p-6 pt-2 mx-auto">
        {/* Left Column - Info */}
        <div className="w-full lg:flex-1 min-w-0 h-fit card-shadow shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-700">{description}</p>
          <div className="card-view-like">
            
            <button
              onClick={() => router.push(buttonLink)}
              className="mt-3 inline-block px-4 py-2 text-white bg-[#171717] text-[12px] rounded hover:brightness-110 transition w-[6rem]"
            >
              View Link
            </button>
          </div>
        </div>

        {/* Right Column - Submission Heatmap */}
        <div className="w-full lg:flex-1 min-w-0 card-shadow shadow p-4 overflow-auto">
          <div className="flex items-center mb-2">
            <SubmissionHeatmap />
          </div>
        </div>
      </div>

      {/* Section for Trending Repos and Projects */}
      <section className="flex flex-col px-6 py-8 mx-auto">
        {/* Row */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* First Col (Trending Repos) */}
          <div className="w-full lg:w-1/2">
            <h2 className="flex text-lg font-semibold mb-2 text-gray-900 pl-3 items-center">
              {/* Trending Repos Icon */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 496 512"
                className="mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
              Trending Repos
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 w-full">
              {projectTitle.map((projectTitle, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white shadow w-full sm:w-1/3"
                >
                  <h4 className="font-semibold tracking-tight text-sm line-clamp-1 flex items-center text-black">
                    <a
                      className="flex items-center"
                      href={projectTitle.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.251 3.251 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A2.989 2.989 0 0 1 6 15h13.5Z"></path>
                        <path d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2v-5.01Z"></path>
                      </svg>
                      <span className="line-clamp-1 ml-1 text-xs text-black">
                        {projectTitle.title}
                      </span>
                    </a>
                  </h4>
                  <p className="text-sm text-gray-500 mt-2 leading-snug line-clamp-3">
                    {projectTitle.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="rounded-md border py-0.5 px-2 text-xs font-semibold bg-black text-white">
                      {projectTitle.languages}
                    </div>
                    <div className="flex items-center text-black">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="block w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="ml-0.5 text-sm">
                        {projectTitle.star}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Col (Projects) */}
          <div className="w-full lg:w-1/2">
            <h2 className="flex text-lg font-semibold mb-2 text-gray-900 items-center">
              {/* Projects Icon */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="..." />
              </svg>
              Projects
            </h2>
            <div className="p-4 rounded-lg bg-white h-auto shadow min-h-[9.5rem]">
              <Accordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
