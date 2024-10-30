
import { IoMdSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="relative w-80 mt-1">
      <form className="flex items-center bg-white shadow-lg rounded-full">
        <IoMdSearch className="absolute left-3 text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          title="Enter Search Keyword"
          className="pl-10 pr-4 py-2 w-full focus:outline-none rounded-full"
          // onChange={}
        />
        <button
          type="Search"
          title="Search"
          className="bg-gray-500 hover:bg-yellow-200 hover:text-black text-white py-1 px-2 rounded-full transition duration-300"
          // onClick={}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
