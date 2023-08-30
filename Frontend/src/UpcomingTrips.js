import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import SearchBar from "./SearchBar"; // Assuming you've already created this component

const App = () => {
  const [item, setItem] = useState(Data);
  const [titleSearchTerm, settitleSearchTerm] = useState("");
  const [destinationSearchTerm, setdestinationSearchTerm] = useState("");

  // Function to filter items based on the search term
  const filterBytitle = () => {
    if (titleSearchTerm.trim() === "") {
      setItem(Data);
    } else {
      const newItem = Data.filter((newVal) => {
        return newVal.title.toLowerCase().includes(titleSearchTerm.toLowerCase());
      });
      setItem(newItem);
    }
  };

  const filterBydestination = () => {
    if (destinationSearchTerm.trim() === "") {
      setItem(Data);
    } else {
      const newItem = Data.filter((newVal) => {
        return newVal.destination.toLowerCase().includes(destinationSearchTerm.toLowerCase());
      });
      setItem(newItem);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Upcoming Trips</h1>
          <SearchBar
            searchTerm={titleSearchTerm}
            setSearchTerm={settitleSearchTerm}
            filterBySearch={filterBytitle}
            placeholder="From"
            buttonText="Go"
          />
          <SearchBar
            searchTerm={destinationSearchTerm}
            setSearchTerm={setdestinationSearchTerm}
            filterBySearch={filterBydestination}
            placeholder="To"
            buttonText="Go"
          />
          {/* <Card item={item} /> */}
          <Card  />
        </div>
      </div>
    </>
  );
};

export default App;
