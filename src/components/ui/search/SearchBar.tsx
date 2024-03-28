"use client";

import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  searchTerm: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
}

export const SearchBar = ({
  searchTerm,
  handleChange,
  handleSubmit,
}: SearchBarProps) => {
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="flex items-center bg-white rounded-full shadow-lg">
        <input
          className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="p-2">
          <button
            className=" btn-primary text-white !rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center"
            type="submit"
          >
            <FiSearch />
          </button>
        </div>
      </div>
    </form>
  );
};
