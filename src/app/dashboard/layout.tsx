"use client";
import { useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [cities, setCities] = useState(["london", "paris"]);
  console.log("hii");

  return (
    <div>
      <div> </div>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            {" "}
            <Link href={`/city/${city}`}> {city.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
