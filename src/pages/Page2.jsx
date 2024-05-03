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
  const [colDefs, setColDefs] = useState(data);

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

  useEffect(() => {
    getRowData();
  }, []);

  return (
    <main className=" min-h-[88vh] max-h-auto w-full overflow-x-hidden pt-2 noscroll relative overflow-y-scroll">
      <div className="ag-theme-quartz h-auto">
        <AgGridReact
          className="ag-grid"
          rowData={rowData}
          columnDefs={colDefs}
        />
      </div>
    </main>
  );
};
