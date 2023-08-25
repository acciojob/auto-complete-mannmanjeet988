import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  const [filteredFruits, setFilteredFruits] = useState(fruits);

  const [searchTerm, setSerachTerm] = useState("");

  useEffect(() => {
    filterFruits();
  }, [searchTerm]);

  const filterFruits = () => {
    const filteredFruitsArr = fruits.filter((fruit) =>
      fruit.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredFruits(filteredFruitsArr);
    console.log(filteredFruits);
  };

  return (
    <div>
      <h1>Search item</h1>
      <input
        type="text"
        onChange={(e) => setSerachTerm(e.target.value)}
        value={searchTerm}
      />
      {filteredFruits && (
        <ul>
          {
          filteredFruits.map((item) => (
            <li>{item}</li>
          ))
          }
        </ul>
      )}
    </div>
  );
};

export default App;
