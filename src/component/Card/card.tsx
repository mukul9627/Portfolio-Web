"use client";
import React from "react";
import { format } from "date-fns";
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
  return (
    <>
      {/* Card Section */}
      <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg p-6 pt-2 max-w-7xl mx-auto">
        {/* Left Column - Info */}
        <div className="w-full lg:flex-1 min-w-0 h-fit card-shadow shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-700">{description}</p>
          <div className="card-view-like">
            <button
              onClick={() => window.open(buttonLink, "_blank")}
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
      <section className="max-w-7xl flex flex-col px-6 py-8 mx-auto">
        {/* Row */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* First Col (Trending Repos) */}
          <div className="w-full lg:w-1/2">
            <h2 className="flex text-lg font-semibold mb-2 text-gray-900 pl-3 items-center">
              {/* Trending Repos Icon */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                className="mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="..." /> {/* Your SVG Path */}
              </svg>
              Trending Repos
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 w-full">
              {[...Array(3)].map((_, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white shadow w-full sm:w-1/3"
                >
                  <h4 className="font-semibold tracking-tight text-sm line-clamp-1 flex items-center text-black">
                    <a
                      className="flex items-center"
                      href="https://github.com/phondani0/vite-serve"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="..." />
                      </svg>
                      <span className="line-clamp-1 ml-1 text-xs text-black">
                        vite-serve
                      </span>
                    </a>
                  </h4>
                  <p className="text-sm text-gray-500 mt-2 leading-snug line-clamp-3">
                    A VS Code extension designed to streamline your React
                    development workflow by starting your existing projects with
                    Vite with no extra configuration.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="rounded-md border py-0.5 px-2 text-xs font-semibold bg-black text-white">
                      TypeScript
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
                      <span className="ml-0.5 text-sm">1</span>
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
