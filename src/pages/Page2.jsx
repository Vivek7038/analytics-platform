import React, { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import SearchBar from "../components/SearchBar";
import CompanyLogoRenderer from "../components/CompanyLogoRenderer";
import toast from "react-hot-toast";
import Profile from "../components/Profile";

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
  const [userData, setUserData] = useState();
  const [colDefs, setColDefs] = useState([
    {
      headerName: "",
      field: "img",
      cellRenderer: CompanyLogoRenderer,
      flex: 1,
    },
    { headerName: "Name", field: "full_name" },
    { headerName: "WhatsApp Number", field: "whatsapp_no", flex: 1 },
    { headerName: "Position", field: "position" },
    { headerName: "Taluka", field: "Taluka" },
    {
      headerName: "Action",
      field: "id",
      cellRenderer: (params) => (
        <div className="flex gap-8">
          <button
            className="px-4 border-blue-800 border rounded-md "
            onClick={() => setUserData(params.data)}
          >
            Veiw
          </button>
          <button
            className="px-4 bg-red-600 text-white rounded-md hover:bg-red-800"
            onClick={() => deletuser(params)}
          >
            Delete
          </button>
        </div>
      ),
      flex: 2,
    },
    // {headerName:"Action", field:"action", cellRenderer:Action}
  ]);
  const [gridApi, setGridApi] = useState(null);
  const [isFilter, setIsFilter] = useState(false);
  const [defaultPageSize, setDefaultPageSize] = useState(15);

  useEffect(() => {
    getRowData();
  }, []);

  const deletuser = async (param) => {
    const id = param.data.id;
    try {
      await deleteDoc(doc(db, "userinfo", id));
      setRowData(rowData.filter((item) => item.id !== id));
      toast.success("User deleted");
    } catch (e) {
      console.log(e);
      toast.error("Something wne wrong");
    }
  };

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
    setIsFilter(true);
  };
  const onFilterChanged = (event) => {
    setIsFilter(event.api.isAnyFilterPresent());
  };

  var localeText = {
    pageSizeSelectorLabel: "Number of Cases:",
  };
  const gridOptions = {
    autoSizeStrategy: {
      type: "fitGridWidth",
    },
    paginationPageSize: 15,
    paginationPageSizeSelector: [15, 20, 50, 100],
    domLayout: "autoHeight",
    localeText: localeText,
    rowHeight: 50,
  };
  const defaultColDef = {
    flex: 1,
    filter: true,
    sortable: true,
  };
  return (
    <main className="flex">
      <div className="px-6 py-4">
        <SearchBar
          onFilterTextChange={onFilterTextChange}
          clearFilters={clearFilters}
          isFilter={isFilter}
        />
        <div
          className="ag-theme-quartz "
          style={{ height: "100vh", width: "60vw" }}
        >
          <AgGridReact
            className="ag-grid"
            rowSelection="multiple"
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
      <Profile data={userData} />
    </main>
  );
};
