"use client";
import React from "react";
import { format } from "date-fns";
import "@/component/Card/card.css";
import "@/app/globals.css"
import Accordion from "@/component/AccordionItem/Accordion"

function generateChartData() {
  const today = new Date();
  const data = [];
  for (let i = 0; i < 180; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    data.unshift({
      date: date.toISOString().split("T")[0],
      count: Math.floor(Math.random() * 5),
    });
  }
  return data;
}

function getColor(count: number) {
  if (count === 0) return "#ebedf0";
  if (count < 2) return "#9be9a8";
  if (count < 4) return "#40c463";
  return "#30a14e";
}

type CardProps = {
  name: string;
  description: string;
  buttonLink: string;
};

const Card: React.FC<CardProps> = ({ name, description, buttonLink }) => {
  const data = generateChartData();
  const weeks: { date: string; count: number }[][] = [];

  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const totalSubmissions = data.reduce((sum, d) => sum + d.count, 0);

  const monthLabels: { name: string; width: number }[] = [];
  let currentMonth = "";
  let count = 0;

  weeks.forEach((week) => {
    const firstDay = week[0];
    const month = format(new Date(firstDay.date), "MMM");

    if (month !== currentMonth) {
      if (currentMonth !== "") {
        monthLabels[monthLabels.length - 1].width = count;
      }
      monthLabels.push({ name: month, width: 1 });
      currentMonth = month;
      count = 1;
    } else {
      count++;
    }
  });

  if (monthLabels.length) {
    monthLabels[monthLabels.length - 1].width = count;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg p-6 w-[90%] ">
        {/* Left Column - Info */}
        <div className="flex-1 card-shadow shadow">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-700">{description}</p>
          <div className="card-view-like">
          <button
  onClick={() => window.open(buttonLink, "_blank")}
  className="mt-4 inline-block px-4 py-2 text-white bg-[#171717] text-[12px] rounded hover:brightness-110 transition w-[7rem]"
>
  View Link
</button>
          </div>
        </div>

        {/* Right Column 1 - Heatmap */}
        <div className="flex-1 overflow-x-auto card-shadow">
          {/* Label Row */}
          <div className="flex items-center mb-2">
            <p className="flex items-center mr-4 text-sm font-medium text-gray-700">
              <svg
                className="mr-1"
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
              GfG
            </p>
            <p className="text-gray-500 text-sm tracking-wide">
              - {totalSubmissions} Submissions in past 6 months
            </p>
          </div>

          {/* Month Labels */}
          <div className="flex text-xs text-gray-500 mb-1 ml-2 gap-3">
            {monthLabels.map((month, idx) => (
              <div key={idx} style={{ width: `${month.width * 12}px` }}>
                {month.name}
              </div>
            ))}
          </div>

          {/* Heatmap Grid */}
          <div className="grid grid-flow-col auto-cols-max gap-x-1.5 px-2 mb-2">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col">
                {week.map((day, di) => (
                  <div
                    key={di}
                    title={`${day.count} submissions on ${day.date}`}
                    className="w-3 h-3 rounded-sm m-0.5"
                    style={{ backgroundColor: getColor(day.count) }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="flex items-center mt-2 mb-4">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
      </svg> Trending Repos</h2>
      <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-lg p-6 w-[90%]">
        {/* Left Column - Grid of Cards */}
      
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-1/2 lg:w-[50%] h-[9.5rem]">
          {/* Card 1 */}
          <div className="p-4 rounded-lg bg-white shadow w-full sm:w-1/3">
            <h4 className="font-semibold tracking-tight text-xs line-clamp-1 flex items-center text-black dark:text-black">
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
                  <path d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.251 3.251 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A2.989 2.989 0 0 1 6 15h13.5Z" />
                  <path d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2v-5.01Z" />
                </svg>
                <span className="line-clamp-1 ml-1 text-xs text-black dark:text-black">
                  vite-serve
                </span>
              </a>
            </h4>

            <p className="text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed line-clamp-3 mt-2 card-sm-text">
              A VS Code extension designed to streamline your React development
              workflow by starting your existing projects with Vite with no
              extra configuration.
            </p>

            <div className="flex items-center justify-between mt-4">
              <div className="rounded-md border py-0.5 px-2 text-xs font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/80 transition-colors line-clamp-1 text-ellipsis overflow-hidden bg-black text-white">
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

          {/* Card 2 */}
          <div className="p-4 rounded-lg bg-white shadow w-full sm:w-1/3">
            <h4 className="font-semibold tracking-tight text-xs line-clamp-1 flex items-center text-black dark:text-black">
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
                  <path d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.251 3.251 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A2.989 2.989 0 0 1 6 15h13.5Z" />
                  <path d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2v-5.01Z" />
                </svg>
                <span className="line-clamp-1 ml-1 text-xs text-black dark:text-black">
                  vite-serve
                </span>
              </a>
            </h4>

            <p className="text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed line-clamp-3 mt-2 card-sm-text">
              A VS Code extension designed to streamline your React development
              workflow by starting your existing projects with Vite with no
              extra configuration.
            </p>

            <div className="flex items-center justify-between mt-4">
              <div className="rounded-md border py-0.5 px-2 text-xs font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/80 transition-colors line-clamp-1 text-ellipsis overflow-hidden bg-black text-white">
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

          {/* Card 3 */}
          <div className="p-4 rounded-lg bg-white shadow w-full sm:w-1/3">
            <h4 className="font-semibold tracking-tight text-xs line-clamp-1 flex items-center text-black dark:text-black">
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
                  <path d="M3 2.75A2.75 2.75 0 0 1 5.75 0h14.5a.75.75 0 0 1 .75.75v20.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25v-4H6A1.5 1.5 0 0 0 4.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 0 1-.6 1.374A3.251 3.251 0 0 1 3 18.75ZM19.5 1.5H5.75c-.69 0-1.25.56-1.25 1.25v12.651A2.989 2.989 0 0 1 6 15h13.5Z" />
                  <path d="M7 18.25a.25.25 0 0 1 .25-.25h5a.25.25 0 0 1 .25.25v5.01a.25.25 0 0 1-.397.201l-2.206-1.604a.25.25 0 0 0-.294 0L7.397 23.46a.25.25 0 0 1-.397-.2v-5.01Z" />
                </svg>
                <span className="line-clamp-1 ml-1 text-xs text-black dark:text-black">
                  vite-serve
                </span>
              </a>
            </h4>

            <p className="text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed line-clamp-3 mt-2 card-sm-text">
              A VS Code extension designed to streamline your React development
              workflow by starting your existing projects with Vite with no
              extra configuration.
            </p>

            <div className="flex items-center justify-between mt-4">
              <div className="rounded-md border py-0.5 px-2 text-xs font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/80 transition-colors line-clamp-1 text-ellipsis overflow-hidden bg-black text-white">
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
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-1/2 lg:w-[50%] h-[9.5rem]">
  <div className="p-4 rounded-lg bg-white  w-full h-full">
    <Accordion/>
  </div>
</div>
      </div>
    </>
  );
};

export default Card;
