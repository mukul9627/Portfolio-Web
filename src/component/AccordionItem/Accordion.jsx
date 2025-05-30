import { useState } from "react";
import "@/component/AccordionItem/accordion.css";
import Image from "next/image";
// import { CodeBracketIcon } from '@heroicons/react/24/solid';
import Portfolio from "@/myImage/portfolio.png";

const AccordionItem = ({ title, content, index, isOpen, toggleOpen }) => (
  <div>
    {/* <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="text-gray-800 relative top-[2.8rem]"
>
  <polyline points="16 18 22 12 16 6" />
  <polyline points="8 6 2 12 8 18" />
</svg> */}

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
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
          <Image
            src={Portfolio}
            alt="project Img"
            className="mb-4 w-30% h-30% ml-[12rem]"
          />
          <p className="mb-2">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p>
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </>
      ),
    },
    {
      title: "Is there a Figma file available?",
      content: (
        <>
          <p className="mb-2">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p>
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </>
      ),
    },
    {
      title: "What are the differences between Flowbite and Tailwind UI?",
      content: (
        <>
          <p className="mb-2">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2">Learn more about these technologies:</p>
          <ul className="list-disc ps-5">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      ),
    },
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
