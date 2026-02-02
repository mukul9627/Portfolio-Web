import { useState } from "react";
import "@/component/AccordionItem/accordion.css";
import Image from "next/image";
// import { CodeBracketIcon } from '@heroicons/react/24/solid';
import Portfolio from "@/myImage/portfolio.png";
import GTT from "@/myImage/GrabThatTrip_Colour.svg";

const AccordionItem = ({ title, content, index, isOpen, toggleOpen }) => (
  <div>
    <h2>
      <button
        type="button"
        onClick={() => toggleOpen(index)}
        className={`flex text-left items-center justify-between w-full p-5 font-medium text-Black-500   dark:text-gray-900 hover:bg-gray-100  gap-3 ${
          index === 0 ? "rounded-t-xl" : ""
        }`}
        aria-expanded={isOpen}
        aria-controls={`accordion-body-${index}`}
      >
        <span className="flex">
          <span className="bg-gray-200 rounded-full p-2 flex items-center justify-center w-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-800"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </span>{" "}
          <span className="pl-2">
            {title}
            <span>
              <p className="text-sm text-muted-foreground flex items-center mt-1">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                01/08/2024
              </p>
            </span>
          </span>
        </span>

        <svg
          data-accordion-icon
          className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div
      id={`accordion-body-${index}`}
      className={`${isOpen ? "block" : "hidden"}`}
    >
      <div className="p-5  border-b-0  dark:border-gray-700  text-sm text-gray-900 dark:text-gray-400">
        {content}
      </div>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const items = [
    {
      title: "Portfolio",
      content: (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src={Portfolio}
                alt="project Img"
                className="w-full max-w-[250px] h-auto"
              />
            </div>

            {/* Summary Paragraph */}
            <div>
              <p className="text-gray-600 text-sm lg:text-[16px] leading-relaxed">
                Built a portfolio using Next.js. Used server-side rendering,
                dynamic routing. Styled with Tailwind CSS for consistency.
                Stored form data using SQL database.{" "}
              </p>
            </div>
          </div>
        </>
      ),
    },

    {
      title: "CRM",
      content: (
        <>
          <p className="mt-2 pl-5 text-gray-600 text-sm lg:text-[16px] leading-relaxed">
            Designed and developed a custom CRM (Customer Relationship
            Management) system to digitize manual sales, operations, and
            accounting workflows. Replaced traditional paper-based
            processes—such as form filling and lead tracking—with a centralized
            digital platform. Utilized React.js for the front-end, .NET APIs for
            backend logic, and SQL Server for data storage. Improved lead source
            visibility, task tracking, and departmental efficiency through
            automation and real-time updates. Significantly enhanced team
            productivity by reducing manual errors and streamlining
            cross-department collaboration.
          </p>
        </>
      ),
    },
   {
  title: "Grab That Trip",
  content: (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={GTT}
            alt="Grab That Trip project"
            className="w-full max-w-[250px] h-auto"
          />
        </div>

        {/* Summary */}
        <div>
          <p className="text-gray-600 text-sm lg:text-[16px] leading-relaxed">
            Grab That Trip is a tour package provider web application built
            using Next.js. The project features dynamic routing and
            SEO-friendly pages to improve discoverability. Responsive
            package listing and detail pages were developed using Bootstrap,
            along with validated inquiry and booking forms to enhance user
            engagement and overall experience.
          </p>
        </div>
      </div>
    </>
  ),
}

  ];

  return (
    <div className="accodion-p" id="accordion-collapse">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          index={idx}
          {...item}
          isOpen={openIndex === idx}
          toggleOpen={toggleOpen}
        />
      ))}
    </div>
  );
};

export default Accordion;
