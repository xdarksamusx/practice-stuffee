"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [cities, setCities] = useState(["london", "paris"]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCities([...cities, value]);
    setValue("");
  };

  console.log("myyyy");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={value}
          style={{ color: "black" }}
        />
      </form>

      <ul>
        {cities.map((city) => (
          <li key={city}>
            {" "}
            <Link href={`/city/${city}`}> {city.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
