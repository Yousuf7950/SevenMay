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
import { Checkbox, Table, TableRow } from "@material-ui/core";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";
import axios from "axios";
// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Select from "react-select";

const services = [];
const serCash = [];
const services2 = [];
const serCash2 = [];
const services3 = [];
const serCash3 = [];
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
// const tyreOpt = [
//   { id: 1, label: " Steel rim repair", cash: 1700 },
//   { id: 2, label: "Wheel balancing", cash: 3050 },
//   { id: 3, label: " Steel rim repair", cash: 4000 },
// ];
const BodyOpt = [
  { id: 1, label: "Engine bonnet repair", cash: 5000 },
  { id: 2, label: "Boot lid replacement", cash: 3000 },
  { id: 3, label: "Whole car body painting", cash: 2000 },
  { id: 4, label: "Rear quarter replacement", cash: 2100 },
];
let totalCash = 0;
let t1 = 0;
let c1 = 0;
let t2 = 0;
let c2 = 0;
let t3 = 0;
let c3 = 0;
function Tables() {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  // const { columns, rows } = authorsTableData();
  const [custdate, setCustdate] = useState("");
  const [status, setStatus] = useState(false);
  const [custcar, setCustcar] = useState("");
  const [custnum, setCustnum] = useState("");
  // const [totalCash, setTotalCash] = useState("");
  // Service information ki state
  // yeh wali hain enable kr ny k leye

  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  // const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  // let tempe = 0;

  const [bundle, setBundle] = useState([]);
  const [mycash, setMycash] = useState("");
  const [checkedState, setChekcedState] = useState([]);
  const [sub1, setSub1] = useState([]);
  const [sub2, setSub2] = useState([]);
  const [sub3, setSub3] = useState([]);
  const handleChange = (e) => {
    // console.log(e.target);
    const { checked, name, id } = e.target;
    t1 = parseInt(id, 10);
    if (checked) {
      c1 += t1;
      // cash += tempe;
      setChekcedState((oldState) => [...oldState, name]);
      setSub1((oldState) => [...oldState, id]);
    } else {
      setChekcedState((oldState) => oldState.filter((item) => item !== name));
    }
  };
  const [checkedState2, setChekcedState2] = useState([]);
  const handleChange2 = (e) => {
    // console.log(e.target);
    const { checked, name, id } = e.target;
    t2 = parseInt(id, 10);
    if (checked) {
      c2 += t2;
      // cash += tempe;
      setChekcedState2((oldState) => [...oldState, name]);
      setSub2((oldState) => [...oldState, id]);
    } else {
      setChekcedState2((oldState) => oldState.filter((item) => item !== name));
    }
  };

  const [checkedState3, setChekcedState3] = useState([]);
  const handleChange3 = (e) => {
    // console.log(e.target);
    const { checked, name, id } = e.target;
    t3 = parseInt(id, 10);
    if (checked) {
      c3 += t3;
      // cash += tempe;
      setChekcedState3((oldState) => [...oldState, name]);
      setSub3((oldState) => [...oldState, id]);
    } else {
      setChekcedState3((oldState) => oldState.filter((item) => item !== name));
    }
  };
  
  const CashFun = () => {
    console.log(checkedState);
    checkedState.forEach((a) => services.push(a));
    const servicesStr = services.toString();
    console.log(servicesStr);
    sub1.forEach((b) => {
      serCash.push(b);
    });
    const serCashStr = serCash.toString();

    console.log(services);
    checkedState2.forEach((a) => services2.push(a));
    const servicesStr2 = services2.toString();
    console.log(servicesStr2);
    sub2.forEach((b) => {
      serCash2.push(b);
    });
    const serCashStr2 = serCash2.toString();

    checkedState3.forEach((a) => services3.push(a));
    const servicesStr3 = services3.toString();
    console.log(servicesStr3);
    sub3.forEach((b) => {
      serCash3.push(b);
    });
    const serCashStr3 = serCash3.toString();

    // const servicesStr = services.toString();
    // console.log(servicesStr);
    console.log("Cash is :", c1);
    console.log("Cash is :", c2);
    console.log("Cash is :", c3);
    console.log(c1 + c2 + c3);
    setMycash(c1 + c2 + c3);
    // setTotalCash(c1 + c2 + c3);
    totalCash = c1 + c2 + c3;
    // console.log("Cash is :", cash);
    // custcar !== "" && custnum !== "" && custdate !== ""
    if (true) {
      t1 = 0;
      c1 = 0;
      t2 = 0;
      c2 = 0;
      t3 = 0;
      c3 = 0;
      setBundle([
        ...bundle,
        {
          custcar:custcar.toUpperCase(),
          custdate,
          custnum,
          status: status.label,
          servicesStr,
          serCashStr,
          servicesStr2,
          serCashStr2,
          servicesStr3,
          serCashStr3,
          totalCash,
        },
      ]);
      axios.post("http://localhost:3001/addapp", {
        custcar:custcar.toUpperCase(),
        custdate,
        custnum,
        status: status.label,
        servicesStr,
        serCashStr,
        servicesStr2,
        serCashStr2,
        servicesStr3,
        serCashStr3,
        totalCash,
      });
      setChekcedState([]);
      setChekcedState2([]);
      setChekcedState3([]);
      totalCash = 0;
      // setSub1([]);
      // setSub2([]);
      // setSub3([]);
      const today = new Date();
      const gh = today.getHours();
      // const gm = today.getMinutes();
      const time = gh;
      console.log(time);
      setCustdate("");
      setCustcar("");
      setCustnum("");
      setStatus("");
      console.log(bundle);
      console.log(sub1);
      console.log(sub2);
      console.log(sub3);
    } else {
      alert("input field is empty");
    }
  };
  const Posting = () => {
    const today = new Date();
    const gh = today.getHours();
    // const gm = today.getMinutes();
    const time = gh;
    console.log(time);
    setCustdate("");
    setCustcar("");
    setCustnum("");
    setStatus("");
    console.log(bundle);
    console.log(sub1);
    console.log(sub2);
    console.log(sub3);
  };
  console.log(mycash);
  console.log(totalCash);
  console.log(totalCash);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ padding: "1%" }}>
        <div style={{ marginTop: "5px", marginBottom: "5px", paddingBottom: "10px" }}>
          <MDBox mx={-3} mt={-3} py={3} px={2} variant="gradient" bgColor="info" >
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
              {/* <th>
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
              </th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {BodyOpt.map((item) => (
                  <TableRow key={item.id}>
                    <Checkbox
                      disabled={!status4}
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
              <td>
                {MechanicRepairOpt.map((item) => (
                  <TableRow key={item.id}>
                    <Checkbox
                      disabled={!status1}
                      onChange={handleChange2}
                      checked={checkedState2.includes(item.label.toString())}
                      name={item.label}
                      id={item.cash}
                    />
                    <span>
                      {item.label} - {item.cash}
                    </span>
                  </TableRow>
                ))}
              </td>

              <td>
                {InspectionOpt.map((item) => (
                  <TableRow key={item.id}>
                    <Checkbox
                      disabled={!status2}
                      onChange={handleChange3}
                      checked={checkedState3.includes(item.label.toString())}
                      name={item.label}
                      id={item.cash}
                    />
                    <span>
                      {item.label} - {item.cash}
                    </span>
                  </TableRow>
                ))}
              </td>

              <td>
                {/* {tyreOpt.map((item) => (
                  <TableRow key={item.id}>
                    <Checkbox
                      disabled={!status3}
                      onChange={handleChange}
                      checked={checkedState.includes(item.cash.toString())}
                      name={item.cash}
                    />
                    <span>
                      {item.label} - {item.cash}
                    </span>
                  </TableRow>
                ))} */}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* </MDBox> */}
      {/* <div>{checkedState.join(", ")}</div> */}

      <button type="submit" onClick={CashFun} className="pure-material-button-contained">
        Done
      </button>
    {/*  <button type="submit" onClick={Posting} className="pure-material-button-contained">
        Post
      </button>*/}

      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
