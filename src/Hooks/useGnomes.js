import { useEffect, useState } from "react";

const JSON_URL =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

function useGnomes() {
  const [gnomes, setGnomes] = useState([]);
  useEffect(() => {
    fetch(JSON_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGnomes(data.Brastlewark);
      });
  }, []);
  return gnomes;
}

export default useGnomes;
