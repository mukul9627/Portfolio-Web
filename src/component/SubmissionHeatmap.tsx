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
      <h2 className="text-lg font-semibold mb-1">Last 6 Months Submissions</h2>
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
            <div key={index} className="text-center mr-[10px]">
              <div className="mb-.1 text-sm font-medium">
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
