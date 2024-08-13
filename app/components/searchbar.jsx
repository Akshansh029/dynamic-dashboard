/* eslint-disable react/prop-types */
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Searchbar = ({
  value,
  onChange,
  handleSearch,
  onClearSearch,
  isDarkMode,
}) => {
  return (
    <div
      className={`flex items-center h-8 min-w-[180px] w-[270px] px-3 rounded-md gap-2 bg-slate-200`}
    >
      <input
        type="text"
        placeholder="Search anything..."
        className={`w-full bg-transparent text-sm font-normal outline-none focus:placeholder:text-slate-700 text-slate-700 placeholder:text-slate-500 `}
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          size={18}
          className={`cursor-pointer text-slate-700`}
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass className="text-slate-400 cursor-pointer hover:text-slate-700" />
    </div>
  );
};

export default Searchbar;
