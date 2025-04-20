import React from "react";
import { format, subDays } from "date-fns";

// Color logic based on submission count
const getColor = (count: number): string => {
  if (count === 0) return "#ebedf0";
  if (count < 3) return "#9be9a8";
  if (count < 6) return "#40c463";
  if (count < 10) return "#30a14e";
  return "#216e39";
};

// Generate submission data (mocked)
const generateChartData = () => {
  const days = 180;
  const today = new Date();
  const data = [];
  for (let i = 0; i < days; i++) {
    const date = subDays(today, i);
    data.unshift({
      date: format(date, "yyyy-MM-dd"),
      count: Math.floor(Math.random() * 12),
    });
  }
  return data;
};

const chart = () => {
  const data = generateChartData();
  const weeks = [];

  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const totalSubmissions = data.reduce((sum, d) => sum + d.count, 0);

  // Generate month labels
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
    <section className="neumorphic px-3">
    <div className="flex flex-col space-y-1.5 p-6 px-1 py-3">
      <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <p className="mt-2 mb-1 sm:mb-3 sm:mr-2 pt-1 flex items-center">
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
            Leetcode
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm tracking-wide sm:ml-2">
            - {totalSubmissions} Submissions in past 6 months
          </p>
        </div>
      </h3>
    </div>
  
    <div className="p-6 pt-0 px-1 pb-3.5 overflow-x-auto scroll-smooth scrollbar-thin max-w-full">
      <div className="flex text-xs text-gray-500 mb-1 ml-6 gap-3">
        {monthLabels.map((month, index) => (
          <div key={index} style={{ width: `${month.width * 12}px` }}>
            {month.name}
          </div>
        ))}
      </div>
  
      <section className="grid gap-x-1.5 sm:grid-flow-col grid-flow-row auto-cols-max">
        {weeks.map((week, i) => (
          <article key={i} className="flex flex-row sm:flex-col">
            {week.map((day, j) => (
              <div
                key={j}
                className="w-3 h-3 rounded-sm m-0.5"
                title={`${day.count} submissions on ${day.date}`}
                style={{ backgroundColor: getColor(day.count) }}
              ></div>
            ))}
          </article>
        ))}
      </section>
    </div>
  </section>
  );
};

export default chart;
