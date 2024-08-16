/* eslint-disable react/prop-types */
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import useSearchStore from "../store/useSearchStore";

const Searchbar = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div
      className={`flex items-center h-8 min-w-[180px] w-[270px] px-3 rounded-md gap-2 bg-slate-200`}
    >
      <input
        type="text"
        placeholder="Search widgets"
        className={`w-full bg-transparent text-sm font-normal outline-none focus:placeholder:text-slate-700 text-slate-700 placeholder:text-slate-500 `}
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {searchQuery ? (
        <IoMdClose
          size={18}
          className={`cursor-pointer text-slate-700`}
          onClick={handleClearSearch}
        />
      ) : (
        <FaMagnifyingGlass className="text-slate-400 cursor-pointer hover:text-slate-700" />
      )}
    </div>
  );
};

export default Searchbar;
