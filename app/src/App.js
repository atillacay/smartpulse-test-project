/**
 * using axios for xmlHTTP
 * react-bootstrap-table for table display instead of using various loop methods
 * spinner-react for spinner
 */

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const options = {
    defaultSortName: "contractDate",
    defaultSortOrder: "asc",
  };

  //call localhost to get data
  useEffect(() => {
    axios.get("http://localhost:3030/").then((response) => {
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App container text-center">
      <Navbar />
      {loading ? (
        <SpinnerCircular enabled={loading} />
      ) : (
        <div className="wrapper">
          <BootstrapTable data={data} options={options} striped hover condensed>
            <TableHeaderColumn
              dataField="contractDate"
              isKey
              dataSort
              dataAlign="right"
            >
              Tarih
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="totalTrxQuantity"
              dataSort
              dataAlign="right"
            >
              Toplam İşlem Miktari(MWh)
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="totalTrxAmount"
              dataSort
              dataAlign="right"
            >
              Toplam İşlem Tutarı(TL)
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="weightedAvg"
              dataSort
              dataAlign="right"
            >
              Ağırlıklı Ortalama Fiyat(TL/MWh)
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      )}
    </div>
  );
}

export default App;
