import React from "react";
import { Table, Button } from "react-bootstrap";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

class Billing extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      filter: "",
    };
  }
  
  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("http://localhost:3001/recordUser")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  
  
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
  


    return (
      <DashboardLayout>
        <div>
          <h1 style={{ alignContent: "center"}}>Customer Details</h1>
          <Table striped bordered hover variant="light" style={{ fontSize: "10px", textAlign:'center' }}>
            <thead>
              <tr>
                <th>Index</th>
                <th>Car No</th>
                <th>Date</th>
                <th>Customer No</th>
                <th>Status</th>
                <th>Body repairs</th>
                <th>Mechanical repairs</th>
                <th>Inspection</th>
                <th>Total Cash</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, key) => {
                return (
                  <tr key={item.id}>
                    <td>{key}</td>
                    <td>{item.custcar}</td>
                    <td>{item.custdate}</td>
                    <td>{item.custnum}</td>
                    <td>{item.status}</td>
                    <td>{item.servicesStr}</td>
                    <td>{item.servicesStr2}</td>
                    <td>{item.servicesStr3}</td>
                    <td>{item.totalCash}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </DashboardLayout>
    );
  }
}

export default Billing;