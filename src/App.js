import React, { useState } from "react";
import pokemons from "./pokemons.js";

function App() {

    const dataList = pokemons;
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(dataList);

    const excludeColumns = ["color"];

    const handleChange = value => {
        setSearchText(value);
        filterData(value);
    };

    const filterData = value => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(dataList);
        else {
            const filteredData = dataList.filter(item => {
                return Object.keys(item).some(key =>
                    excludeColumns.includes(key)
                        ? false
                        : item[key]
                            .toString()
                            .toLowerCase()
                            .includes(lowercasedValue)
                );
            });
            setData(filteredData);
        }
    };

    return (
        <div className="App">
            <div className="container">
                <h1>React Pokedex</h1>
                <div className="search">
                    <div className="form-inline d-flex justify-content-center">
                        <input
                            style={{ marginLeft: 5 }}
                            type="text"
                            placeholder="Search..."
                            value={searchText}
                            onChange={e => handleChange(e.target.value)}
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="grid">
                    {data.map((d, i) => {
                        return (
                            <div key={d.id} className={"item " + d.type[0]}>
                                <b>{d.name}</b>
                                <br />
                                Type : {d.type[0]}{d.type[1] != null && ' / ' + d.type[1]}
                                <br />
                                <img src={d.image} alt={d.name} />
                            </div>
                        );
                    })}
                </div>

                {data.length === 0 && <p>No records found to display!</p>}
            </div>
        </div>
    );
}

export default App;
