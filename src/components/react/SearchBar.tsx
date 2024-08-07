import React, { useState, useEffect } from "react";
import fusejs from "fuse.js";
import type { Post } from "~/types";

const SearchBar = ({ posts }: { posts: Post[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const fuse = new fusejs(posts, {
    // Weighted keys to search on
    keys: [
      {
        name: "title",
        weight: 0.7,
      },
      {
        name: "content",
        weight: 0.3,
      },
    ],
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);

    const results = fuse.search(event.target.value);
    console.log("Results:", results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 rounded-full border-gray-400 border bg-transparent  leading-snug transition py-3.5 px-6 md:px-8 ease-in duration-200 focus:ring-blue-500 focus:ring-offset-blue-200 focus:ring-2 focus:ring-offset-2 hover:bg-gray-100 hover:border-gray-600 dark:text-slate-300 dark:border-slate-500  dark:hover:border-slate-800 dark:hover:bg-slate-800 cursor-pointer"
      />
      <ul>{/* Render search results here */}</ul>
    </div>
  );
};

export default SearchBar;
