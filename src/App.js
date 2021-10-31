import React, { useEffect, useState } from "react";

import Gnome from "./components/gnomes";

const JSON_URL =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

function App() {
  const [gnomes, setGnomes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(JSON_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGnomes(data.Brastlewark);
      });
  }, []);

  const handleOnSubmit = (e) => {
    fetch(JSON_URL + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setGnomes(data.Brastlewark);
      });
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="gnome-container">
        {gnomes.map((gnome) => (
          <Gnome key={gnome.id} {...gnome} />
        ))}
      </div>
    </>
  );
}

export default App;
