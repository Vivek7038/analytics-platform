import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import SearchBar from "../components/SearchBar";

const data = [
  { headerName: "Gender", field: "gender" },
  { headerName: "Date of Birth", field: "dateOfBirth" },
  { headerName: "Position", field: "position" },
  { headerName: "Village", field: "village" },
  { headerName: "Information", field: "information" },
  { headerName: "WhatsApp Number", field: "whatsapp_no" },
  { headerName: "Full Name", field: "full_name" },
  { headerName: "Mobile Number", field: "mobile_no" },
  { headerName: "Taluka", field: "Taluka" },
  { headerName: "Image", field: "img" },
  { headerName: "ID", field: "id" },
];

export const Page2 = () => {
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([
    { headerName: "Gender", field: "gender" },
    { headerName: "Date of Birth", field: "dateOfBirth" },
    { headerName: "Position", field: "position" },
    { headerName: "Village", field: "village" },
    { headerName: "Information", field: "information" },
    { headerName: "WhatsApp Number", field: "whatsapp_no" },
    { headerName: "Full Name", field: "full_name" },
    { headerName: "Mobile Number", field: "mobile_no" },
    { headerName: "Taluka", field: "Taluka" },
    { headerName: "Image", field: "img" },
    { headerName: "ID", field: "id" },
  ]);
  const [gridApi, setGridApi] = useState(null);
  const [isFilter, setIsFilter] = useState(false);
  const [defaultPageSize, setDefaultPageSize] = useState(15);
  const getRowData = async () => {
    const collectionRef = collection(db, "userinfo");
    await getDocs(collectionRef)
      .then((data) => {
        let rowData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setRowData(rowData);
        console.log(rowData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onGridReady = (params) => {
    console.log(params, "param");
    setGridApi(params.api);
  };
  const clearFilters = () => {
    if (gridApi) {
      gridApi.setFilterModel(null);
    }
  };

  const onFilterTextChange = (text) => {
    gridApi.setGridOption("quickFilterText", text);
    setIsFilter(true)
  };
  const onFilterChanged = (event) => {
    setIsFilter(event.api.isAnyFilterPresent());
  };
  useEffect(() => {
    getRowData();
  }, []);
  var localeText = {
    pageSizeSelectorLabel: 'Number of Cases:',
}
  const gridOptions = {
    autoSizeStrategy: {
        type: 'fitGridWidth'
    },
    paginationPageSize: 15,
    paginationPageSizeSelector: [15, 20, 50, 100],
    domLayout: "autoHeight",
    localeText: localeText,
}
  const defaultColDef = {
    filter: true,
    sortable: true,
}
  return (
    <main className="min-h-[100vh] min-w-[100vw]">
      <div className="px-6 py-4">
      <SearchBar onFilterTextChange={onFilterTextChange} clearFilters={clearFilters} isFilter={isFilter} />
      <div
        className="ag-theme-quartz "
        style={{ height: "100vh", width: "100vw" }}
      >
        <AgGridReact
          className="ag-grid"
          style={{ width: "100%", height: "100%" }}
          rowData={rowData}
          columnDefs={colDefs}
          onGridReady={onGridReady}
          defaultColDef={defaultColDef}
          pagination={true}
          onFilterChanged={onFilterChanged}
          gridOptions={gridOptions}
        />
      </div>
      </div>
    </main>
  );
};
