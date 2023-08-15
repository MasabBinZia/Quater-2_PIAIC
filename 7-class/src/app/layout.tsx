"use client";
import { Inter } from "next/font/google";
import { createContext, useContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const ThemeContext = createContext("light");
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContext.Provider value={theme}>
          <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
            />
            Use dark mode
          </label>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
