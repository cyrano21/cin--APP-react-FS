/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ onSearch, SortAscending, SortDescending}) => {
  const [inputValue, setinputValue] = useState("");

  const inputSearch = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className="form-component">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            placeholder="Entrez le titre d'un film"
            onChange={inputSearch}
          />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad" onClick={SortAscending}>
            Top<span>➜</span>
          </div>
          <div className="btn-sort" id="badToGood" onClick={SortDescending}>
            Flop<span>➜</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
