"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      attribute="class"
    >
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
};
export default Providers;
