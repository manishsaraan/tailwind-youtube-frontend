import React from "react";

const TAGS = [
  "All",
  "News",
  "Music",
  "History",
  "Fixed-wing aircrafts",
  "Mixes",
  "Debates",
  "Live",
  "Podcasts",
  "Cricket",
  "Gaming",
  "Film criticisms",
  "Thoughts",
  "Computer programming",

  "Dramedy",
  "New to you",
];
export const Tags = () => (
  <div className="flex pl-3">
    {TAGS.map((tag) => (
      <div className="first:font-bold first:text-white first:bg-black text-black-500 bg-gray-100 px-2 py-1 rounded-lg mr-2">
        {tag}
      </div>
    ))}
  </div>
);
