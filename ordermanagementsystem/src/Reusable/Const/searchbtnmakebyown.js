import { Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Searchbtnmakebyown = () => {
  const SearchStyleSheet = {
    searchContainer: {
      display: "flex",
    },
    SearchInput: {
      border: "none",
      outline: "none",
    },
  };
  return (
    <>
      <div style={SearchStyleSheet.searchContainer}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="searchInput"
        />
        <label>
          <HugeiconsIcon
            icon={Search01Icon}
            size={24}
            color="#000000"
            strokeWidth={1.5}
          />
        </label>
      </div>
    </>
  );
};

export default Searchbtnmakebyown;
