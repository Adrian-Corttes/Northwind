import React, { useEffect, useState } from "react";
import "./css/search.css";
import Modal from "./Modal";
import Views from "./Views";
import vite from "../../public/be.jpg";

const SearchComponent = () => {
  const [departments, setDepartaments] = useState([]);
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const URL = "http://enlazaa.ws/api/v1/department/getdepartment";
  const URL2 = "http://enlazaa.ws/api/v1/city/getcitybydepartment/1";

  // Llamado a la API
  const showData = async () => {
    const res = await fetch(URL);
    const { data } = await res.json();
    setDepartaments(data);
  };
  // Llamado a la API
  const showcity = async () => {
    const res = await fetch(URL2);
    const { data } = await res.json();
    setCities(data);
  };

  //searcher function
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  //metodo de filtrado
  const results = !search
    ? departments
    : departments.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLowerCase())
      );

  const cityId = async (num) => {
    console.log(num);
    const res = await fetch(
      `http://enlazaa.ws/api/v1/city/getcitybydepartment/${num}`
    );
    const { data } = await res.json();
    setCities(data);
  };

  useEffect(() => {
    showcity();
    showData();
  }, []);

  //Renderizado
  return (
    <div className="form-container">
      <div className="nav">
        <h3>Northwind</h3>
        <img src={vite} className="nav-logo" alt="img" />
      </div>

      <input
        type="text"
        value={search}
        onChange={searcher}
        placeholder="Buscar"
        className="form-control mb-4"
      />

      <Modal id="1" Ciudad={cities} />

      <div className="table-container">
        <table className="table">
          <thead className="table-dark">
            <tr className="tr">
              <th scope="col">ID</th>
              <th scope="col">Departamento</th>
              <th scope="col">#Ciudades</th>
              <th scope="col"> - </th>
            </tr>
          </thead>
          <tbody>
            {results.map((dep) => (
              <tr key={dep.id}>
                <td>{dep.id}</td>
                <td>{dep.name}</td>
                <td>{cities.length}</td>
                <td>
                  <Views cityId={() => cityId(dep.id)} id={dep.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchComponent;
