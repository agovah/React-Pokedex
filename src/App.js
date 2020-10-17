import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import pokemons from "./pokemons.js";

function App() {

    const dataList = pokemons;
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(dataList);

    // exclude column list from filter
    const excludeColumns = ["color"];

    // handle change event of search input
    const handleChange = value => {
        setSearchText(value);
        filterData(value);
    };

    // filter records by search text
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
            <Container>
                Search:{" "}
                <input
                    style={{ marginLeft: 5 }}
                    type="text"
                    placeholder="Type to search..."
                    value={searchText}
                    onChange={e => handleChange(e.target.value)}
                />
                <div>
                    <Row>
                        {data.map((d, i) => {
                            return (
                                <Col key={i} xs={12} sm={6} md={4} lg={3} className="item">
                                    <b>Name: </b>
                                    {d.name}
                                    <br />
                                    <b>Type: </b>
                                    {d.type[0]} / {d.type[1]}
                                    <br />
                                    <img src={d.image} alt={d.name} />
                                </Col>
                            );
                        })}
                        <div className="clearboth" />
                        {data.length === 0 && <span>No records found to display!</span>}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default App;
