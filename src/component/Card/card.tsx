"use client";
import React from "react";
import "@/component/Card/card.css";
import "@/app/globals.css";
import Accordion from "@/component/AccordionItem/Accordion";
import SubmissionHeatmap from "@/component/SubmissionHeatmap";
import ContactUs from "@/component/Contact/contactUs";

/* ---------------- TYPES New ---------------- */

type CardProps = {
  name: string;
  description: string;
  buttonLink: string;
};

type ProjectItem = {
  title: string;
  description: string;
  languages: string;
  star: number;
  href?: string;
};

/* ---------------- COMPONENT ---------------- */

const Card: React.FC<CardProps> = ({ name, description, buttonLink }) => {
  const projectList: ProjectItem[] = [
    {
      title: "blog-webapplication",
      description:
        "A blog web application built with Next.js, designed for fast performance and easy content management. It features dynamic routing, SEO optimization, and a modern UI.",
      languages: "Next.js",
      star: 1,
    },
    {
      href: "https://github.com/mukul9627/Portfolio-Web",
      title: "portfolio-site",
      description:
        "A personal portfolio website built using Next.js, Node.js, and Tailwind CSS. Optimized for SEO and scalability.",
      languages: "Next.js, Tailwind",
      star: 1,
    },
    {
      href: "https://www.grabthattrip.com/",
      title: "Grab That Trip",
      description:
        "A tour package provider web app built with Next.js featuring SEO-friendly pages, Bootstrap layouts, and booking forms.",
      languages: "Next.js, Bootstrap",
      star: 1,
    },
    {
      href: "https://erp.dbbworldwide.com/",
      title: "CRM",
      description:
        "Custom CRM system built using React.js, .NET APIs, and SQL Server to automate sales and operations workflows.",
      languages: "React, .NET",
      star: 1,
    },
  ];

  return (
    <>
      {/* ---------------- CARD SECTION ---------------- */}
      <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg p-6 pt-2 mx-auto">
        {/* Left */}
        <div className="w-full lg:flex-1 min-w-0 h-fit card-shadow shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-700">{description}</p>
          <div className="card-view-like">
            <a
              href={buttonLink}
              className="mt-3 inline-block px-4 py-2 text-white bg-[#171717] text-[12px] rounded hover:brightness-110 transition w-[6rem]"
            >
              View Detail
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:flex-1 min-w-0 card-shadow shadow p-4 overflow-auto">
          <SubmissionHeatmap />
        </div>
      </div>

      {/* ---------------- TRENDING + PROJECTS ---------------- */}
      <section className="flex flex-col px-6 py-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Trending Repos */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-lg font-semibold mb-2 text-gray-900 pl-3">
              Trending Repos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectList.map((project) => {
                const Wrapper = project.href ? "a" : "div";

                return (
                  <Wrapper
                    key={project.title}
                    {...(project.href && {
                      href: project.href,
                      target: "_blank",
                      rel: "noreferrer",
                    })}
                    className="flex items-center"
                  >
                    <div className="p-4 rounded-lg bg-white shadow w-full">
                      <h4 className="font-semibold text-sm text-black line-clamp-1">
                        {project.title}
                      </h4>

                      <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between mt-4">
                        <span className="rounded-md border py-0.5 px-2 text-xs font-semibold bg-black text-white">
                          {project.languages}
                        </span>

                        <span className="text-sm font-medium text-black">
                          ⭐ {project.star}
                        </span>
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* Projects */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-lg font-semibold mb-2 text-gray-900">
              Projects
            </h2>
            <div className="p-4 rounded-lg bg-white shadow min-h-[9.5rem]">
              <Accordion />
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
};

export default Card;
