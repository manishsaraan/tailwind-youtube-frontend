import { User } from "lucide-react";

const SearchBar = () => (
  <form className="w-1/3">
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
      Search
    </label>
    <div className="relative">
      <input
        type="search"
        id="default-search"
        className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required
      />
      <div className="absolute right-6 top-4 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    </div>
  </form>
);

export const AppBar = () => {
  return (
    <div className="flex justify-between p-3">
      <div className="text-md inline-flex items-center">
        <img className="p-3" src="/logo.png" alt="logo" />
      </div>
      <SearchBar />

      <div className="flex">
        <div className="flex flex-col justify-between h-5 mr-3 cursor-pointer">
          <span className="h-1 w-1 bg-gray-600 rounded-full"></span>
          <span className="h-1 w-1 bg-gray-600 rounded-full"></span>
          <span className="h-1 w-1 bg-gray-600 rounded-full"></span>
        </div>

        <div className="text-lg inline-flex  items-center px-3 cursor-pointer h-10 text-blue-500 border border-blue-500 rounded-round">
          <User className="mr-1" size={20} />
          sign In
        </div>
      </div>
    </div>
  );
};
