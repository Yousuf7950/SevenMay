/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Checkbox, Table, TableBody, TableRow } from "@material-ui/core";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import { useState } from "react";
import Select from "react-select";

const services = [];
const statusOpt = [
  { value: true, label: "Appointment" },
  { value: false, label: "Walkin" },
];

const MechanicRepairOpt = [
  { id: 1, label: "Engine main repair", cash: 1000 },
  { id: 2, label: "Brake fluid replacement", cash: 2000 },
  { id: 3, label: "Coolant replacement", cash: 3000 },
  { id: 4, label: "Suspension repair", cash: 4000 },
];

const InspectionOpt = [
  { id: 1, label: "Air conditioning inspection", cash: 3000 },
  { id: 2, label: "Computer diagnostics", cash: 2100 },
  { id: 3, label: "Extended vehicle inspection", cash: 11000 },
  { id: 4, label: " Car tyre repair", cash: 1500 },
];
const tyreOpt = [
  { id: 1, label: " Steel rim repair", cash: 1700 },
  { id: 2, label: "Wheel balancing", cash: 3050 },
  { id: 3, label: " Steel rim repair", cash: 4000 },
];
const BodyOpt = [
  { id: 1, label: "Engine bonnet repair", cash: 5000 },
  { id: 2, label: "Boot lid replacement", cash: 3000 },
  { id: 3, label: "Whole car body painting", cash: 2000 },
  { id: 4, label: "Rear quarter replacement", cash: 2100 },
];
let tempe = 0;
let cash = 0;
function Tables() {
  // const { columns, rows } = authorsTableData();
  const [custdate, setCustdate] = useState("");
  const [status, setStatus] = useState(false);
  const [custcar, setCustcar] = useState("");
  const [custnum, setCustnum] = useState("");

  // Service information ki state
  // yeh wali hain enable kr ny k leye

  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [checkedState, setChekcedState] = useState([]);

  const [bundle, setBundle] = useState([]);
  const handleChange = (e) => {
    console.log(e.target);
    const { checked, name, id } = e.target;
    tempe = parseInt(id, 10);
    if (checked) {
      cash += tempe;
      setChekcedState((oldState) => [...oldState, { name, id }]);
    } else {
      setChekcedState((oldState) => oldState.filter((item) => item !== name));
    }
  };
  const CashFun = () => {
    checkedState.forEach((x) => {
      console.log(x.name);
      services.push(x.name);
    });
    const servicesStr = services.toString();
    console.log(servicesStr);
    console.log("Cash is :", cash);
    if (custcar !== "" && custnum !== "" && custdate !== "") {
      tempe = 0;
      cash = 0;

      setBundle([
        ...bundle,
        {
          custcar,
          custdate,
          status: status.label,
          custnum,
          Services: checkedState,
        },
      ]);
      setChekcedState([]);
    } else {
      alert("input field is empty");
    }
  };
  const Posting = () => {
    setCustdate("");
    setCustcar("");
    setCustnum("");
    setStatus("");
    console.log(bundle);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ padding: "1%" }}>
        <div style={{ marginTop: "5px", marginBottom: "5px", paddingBottom: "10px" }}>
          <MDBox mx={-3} mt={-3} py={3} px={2} variant="gradient" bgColor="info">
            <MDTypography variant="h6" color="white">
              Customer Information
            </MDTypography>
          </MDBox>
        </div>
        <Table striped bordered hover variant="grey">
          <thead>
            <tr>
              <th>Date</th>
              <th>Appointment/Walkin</th>
              <th>Car Name</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Control
                  value={custdate}
                  type="date"
                  name="custdate"
                  onChange={(e) => setCustdate(e.target.value)}
                  // disabled={!status.value}
                />
              </td>
              <td>
                <Select value={status} onChange={setStatus} options={statusOpt} />
              </td>
              <td>
                <Form.Control
                  value={custcar}
                  type="text"
                  placeholder="Enter Car number"
                  name="custcar"
                  onChange={(e) => setCustcar(e.target.value)}
                />
              </td>
              <td>
                <Form.Control
                  value={custnum}
                  type="text"
                  placeholder="Enter Phone number"
                  name="custnum"
                  onChange={(e) => setCustnum(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div
          style={{
            marginTop: "15px",
            marginBottom: "5px",
            paddingBottom: "10px",
            paddingTop: "25px",
          }}
        >
          <MDBox mx={-3} mt={-3} py={3} px={2} variant="gradient">
            <MDTypography variant="h6" color="black">
              <span style={{ fontSize: "22px", fontweight: "bold" }}> Service Information</span>
            </MDTypography>
          </MDBox>
        </div>
        <Table striped bordered hover variant="grey">
          <thead>
            <tr>
              <th>
                <input
                  label="Mechanical repairs"
                  name="checkbox"
                  type="checkbox"
                  checked={status4}
                  onChange={() => {
                    if (status4) {
                      setStatus4("");
                    }
                    setStatus4(!status4);
                  }}
                />
                <Form.Label> &nbsp;Body repairs and painting</Form.Label>
              </th>
              <th>
                <input
                  label="Mechanical repairs"
                  name="checkbox"
                  type="checkbox"
                  checked={status1}
                  onChange={() => {
                    if (status1) {
                      setStatus1("");
                    }
                    setStatus1(!status1);
                  }}
                />
                <Form.Label>&nbsp; Mechanical repairs </Form.Label>
              </th>
              <th>
                <input
                  label="Inspections/Checks"
                  name="checkbox"
                  type="checkbox"
                  checked={status2}
                  onChange={() => {
                    if (status2) {
                      setStatus2("");
                    }
                    setStatus2(!status2);
                  }}
                />
                <Form.Label>&nbsp; Inspections/Checks </Form.Label>
              </th>
              <th>
                <input
                  label="Mechanical repairs"
                  name="checkbox"
                  type="checkbox"
                  checked={status3}
                  onChange={() => {
                    if (status3) {
                      setStatus3("");
                    }
                    setStatus3(!status3);
                  }}
                />
                <Form.Label>&nbsp; Tyres and rims</Form.Label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {BodyOpt.map((item) => (
                  <TableRow key={item.id}>
                    <Checkbox
                      disabled={!status3}
                      onChange={handleChange}
                      checked={checkedState.includes(item.cash.toString())}
                      name={item.cash}
                      id={item.cash}
                    />
                    <span>
                      {item.label} - {item.cash}
                    </span>
                  </TableRow>
                ))}
              </td>
              <td>
                <Table>
                  <TableBody>
                    {MechanicRepairOpt.map((item) => (
                      <TableRow key={item.id}>
                        <Checkbox
                          disabled={!status3}
                      onChange={handleChange}
                      checked={checkedState.includes(item.label.toString())}
                      name={item.label}
                          id={item.cash}
                        />
                        {/* <span>{item.label}</span> */}
                        <span>
                          {item.label} - {item.cash}
                        </span>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </td>

              <td>
                <Table>
                  <TableBody>
                    {InspectionOpt.map((item) => (
                      <TableRow key={item.id}>
                        <Checkbox
                          disabled={!status3}
                          onChange={handleChange}
                          checked={checkedState.includes(item.label.toString())}
                          name={item.label}
                          id={item.cash}
                        />
                        <span>
                          {item.label} - {item.cash}
                        </span>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </td>

              <td>
                {tyreOpt.map((item) => (
                  <TableRow key={item.id}>
                    <Checkbox
                      disabled={!status3}
                      onChange={handleChange}
                      checked={checkedState.includes(item.label.toString())}
                      name={item.label}
                      id={item.cash}
                    />
                    <span>
                      {item.label} - {item.cash}
                    </span>
                  </TableRow>
                ))}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* </MDBox> */}
      {/* <div>{checkedState.join(", ")}</div> */}

      <button type="submit" onClick={CashFun}>
        Done
      </button>
      <button type="submit" onClick={Posting}>
        Post
      </button>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
