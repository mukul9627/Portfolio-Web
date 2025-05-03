import Sidebar from "../component/Sidebar"

import "../app/globals.css"; // Optional if you have global styles

export const metadata = {
  title: "My Portfolio",
  description: "Built with Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 lg:pl-0  lg:pt-8 lg:ml-64">
          {children}
        </main>
      </body>
    </html>
  
  );
}