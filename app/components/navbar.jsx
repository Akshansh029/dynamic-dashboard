import Searchbar from "./searchbar";

const Navbar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white h-12 px-8 py-2 flex items-center justify-between">
        <h2 className="font-semibold text-black text-sm">Dashboard</h2>
        <Searchbar
          value={searchQuery}
          handleSearch={handleSearch}
          onClearSearch={handleClearSearch}
        />
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-purple-700 text-white flex items-center justify-center w-9 h-9">
            A
          </div>
          <p className="font-medium text-sm text-black">Akshansh</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
