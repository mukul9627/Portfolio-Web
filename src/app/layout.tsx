import Sidebar from "../component/Sidebar"

import "../app/globals.css"; // Optional if you have global styles

export const metadata = {
  title: "My Portfolio",
  description: "Built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="ml-64 p-8 w-full">{children}</main>
      </body>
    </html>
  );
}