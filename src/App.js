import React, { useEffect, useState } from "react";

import Gnome from "./components/gnomes";

const JSON_URL =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

function App() {
  const [gnomes, setGnomes] = useState([]);

  useEffect(() => {
    fetch(JSON_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGnomes(data.Brastlewark);
      });
  }, []);

  return (
    <>
      <header>
        <input className="search" type="search" placeholder="Search" />
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
