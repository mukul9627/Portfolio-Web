"use client";

import {
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  subMonths,
  format,
  getDay,
  isSameMonth,
  isSameDay,
  startOfWeek,
  endOfWeek,
} from "date-fns";

// Simulated data: Map of date => submission count
const submissionMap: Record<string, number> = {
  "2025-01-05": 1,
  "2025-02-10": 2,
  "2025-02-12": 3,
  "2025-03-03": 2,
  "2025-03-05": 1,
  "2025-03-17": 3,
  "2025-04-01": 1,
  "2025-04-03": 2,
  "2025-04-20": 1,
};

const getColor = (count: number) => {
  if (!count) return "bg-gray-200";
  if (count === 1) return "bg-lime-200";
  if (count === 2) return "bg-lime-400";
  return "bg-lime-600";
};

export default function CalendarHeatmap() {
  const today = new Date();

  // Get last 6 months including current month
  const months = Array.from({ length: 6 }, (_, i) =>
    subMonths(today, 5 - i) // e.g. Nov to Apr if today is April
  );

  return (
    <div className="overflow-x-auto">
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
               Submissions in past 6 months
            </p>
          </div>
      {/* <h2 className="text-lg font-semibold mb-1">Last 6 Months Submissions</h2> */}
      <div className="flex space-x-6">
        {months.map((monthDate, index) => {
          const start = startOfWeek(startOfMonth(monthDate), { weekStartsOn: 0 });
          const end = endOfWeek(endOfMonth(monthDate), { weekStartsOn: 0 });
          const days = eachDayOfInterval({ start, end });

          const weeks: (Date | null)[][] = [];
          let currentWeek: (Date | null)[] = [];

          days.forEach((date, i) => {
            if (getDay(date) === 0 && currentWeek.length > 0) {
              weeks.push(currentWeek);
              currentWeek = [];
            }
            currentWeek.push(date);
            if (i === days.length - 1) {
              weeks.push(currentWeek);
            }
          });

          return (
            <div key={index} className="text-center mr-[21px]">
              <div className="mb-.1 text-sm font-medium text-gray-400 font-medium">
                {format(monthDate, "MMM")}
              </div>
              <div className="flex flex-col space-y-1">
                {/* Render 7 rows (Sun to Sat) */}
                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <div key={dayIndex} className="flex space-x-1">
                    {weeks.map((week, weekIndex) => {
                      const day = week[dayIndex];
                      const dateStr = day ? format(day, "yyyy-MM-dd") : "";
                      const count = day && isSameMonth(day, monthDate)
                        ? submissionMap[dateStr] || 0
                        : null;

                      return (
                        <div
                          key={weekIndex}
                          className={`w-2 h-2 rounded-none ${
                            count !== null ? getColor(count) : "bg-transparent"
                          }`}
                          title={day && isSameMonth(day, monthDate) ? `${dateStr}: ${count} submissions` : ""}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
