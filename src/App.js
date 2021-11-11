import React, { useMemo, useState } from "react";
import Gnome from "./components/gnomes";
import Pagination from "./components/Pagination";
import useGnomes from "./hooks/useGnomes";

function App() {
  const gnomes = useGnomes();
  const [searchTerm, setSearchTerm] = useState("");

  const gnomesToShow = useMemo(() => {
    return gnomes.filter(
      (g) => g.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }, [gnomes, searchTerm]);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="headers">
        <h1 className="townName">Brastlewark</h1>
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <input
            className="search"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </div>
      <div>
        {gnomesToShow.length > 0 ? (
          <Pagination
            data={gnomesToShow}
            RenderComponent={Gnome}
            title="Gnomes"
            pageLimit={5}
            dataLimit={12}
          />
        ) : (
          <h1>No Gnomes to display</h1>
        )}
      </div>
    </>
  );
}

export default App;
