import React, { useState, useEffect } from "react";
// import BasicLayout from "layouts/authentication/components/BasicLayout";
// import Webcam from "react-webcam";
import Table from "react-bootstrap/Table";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import "react-notifications/lib/notifications.css";
import { NotificationContainer, NotificationManager } from "react-notifications";
import Axios from "axios";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MultiSelect } from "react-multi-select-component";
import Modal from "react-bootstrap/Modal";
// import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@mui/icons-material";
const statusOpt = [
  { value: "1-2", label: "1-2" },
  { value: "2-3", label: "2-3" },
  { value: "3-4", label: "3-4" },
  { value: "4-5", label: "4-5" },
  { value: "5-6", label: "5-6" },
];

var today = new Date();
var datt = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var tim = today.getHours("H:MM") % 12 || 12;
var next = (today.getHours() + 1) % 12 || 12;
// outputformat = new tim("MM-dd-yyyy HH:mm:ss");
export default function WebcamCapture() {
  const [file, setFile] = useState("");
  const [appdata, setAppdata] = useState([]);
  const [custName, setCustName] = useState("");
  const [car_num, setCarNum] = useState("");
  const [cust_num, setCustNum] = useState("");
  const [mydate, setMydate] = useState("");
  const [slot, setSlot] = useState("");
  const [curr, setCurr] = useState("");
  const [status, setStatus] = useState(false);
const [tat,setTat]=useState(false)
  const [flag, setFlag] = useState(false);
  const [dot,setDot]=useState(false);
  let navigate = useNavigate();

  const [bundle, setBundle] = useState([]);

  // useEffect(() => {}, []);
  useEffect(async () => {
    const result = await Axios("http://localhost:3001/displayapp");
    const x = result.data;
    // alert(result.data)
    setAppdata(x);
  }, [bundle]);
  const data = (str) => {
    return new Promise((resolve, reject) => {
      setCurr(str);
      var kok = str;
      resolve(true);
    });
  };
  const bookitnowfun = () => {
    console.log(custName);

    console.log(cust_num.toLocaleUpperCase());
    console.log(car_num);
    console.log(mydate);
    console.log(slot);
    setBundle([
      ...bundle,
      {
        cust_name: custName,
        car_num: car_num,
        cust_num: cust_num,
        mydate: mydate,
        cust_slot: slot.value,
      },
    ]);
    // alert(car_num.toUpperCase())
    setCustName("");
    setCustNum("");
    setCarNum("");
    setMydate("");
    setSlot("");
    Axios.post("http://localhost:3001/mobileappointment", {
      cust_name: custName,
      car_num: car_num.toUpperCase(),
      cust_num: cust_num,
      mydate: mydate,
      cust_slot: slot.value,
      type: "walkin",
    })
      .then((response) => {
        setCustName("");
        setCustNum("");
        setCarNum("");
        setMydate("");
        setSlot("");
      })
      .catch(function (error) {
        console.log("Problem with posting mobile appointment " + error.message);
      });
  };
  console.log(car_num.toUpperCase());
  // console.log(bundle)
  const uploadImage = (e) => {
    const f = e.target.files[0];
    console.log(e.target.files[0], "file");
    setFile(f);
  };
  const getNumber = async () => {
    console.log("getting num");
    setFlag(true);
    try {
      const formData = new FormData();
      formData.append("imageFile", file, file.name);
      formData.append("hello", "world");
      console.log("before fetch", formData.get("imageFile"));
      const result = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      var res = await result.json();
      console.log(res, "result");

      const x = res?.text;
      let temp = x;
      temp = temp
        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
        .replace(/\s/g, "")
        .replace("GOVTOFSINDH", " ")
        .replace(/\s/g, "")
        .replace("-", " ")
        .replace(/\s/g, "")
        .replace("SINDH", " ")
        .replace(/\s/g, "");
      // setCurr(x);
      appdata.map((x) => {
        // console.log(datt===x.book_date  && temp.replace(/\s/g, '')===x.car_num || x.book_slot.charAt(0)==tim)

        if (
          datt === x.book_date &&
          temp.replace(/\s/g, "") === x.car_num &&
          x.book_slot.charAt(0) == tim
        ) {
          // setStatus(false)
          // console.log(x.book_slot.charAt(0))
setTat(true)
          setStatus(true);

          alert("ok");
        } else if (
          datt === x.book_date &&
          temp.replace(/\s/g, "") === x.car_num &&
          x.book_slot.charAt(2) == next
        ) {
          setStatus(true);
          setTat(true)

          alert("Online Appointment ,True");
        } else {
          // alert("no")
          // console.log("in")
          // alert("No")
          setDot(true)
          setStatus(false);
        }
        // else{
        // alert()
        // }
      });

      data(x).then((x) => {
        setFlag(false);
        // checker()
      });
    } catch (e) {
      console.log(e, "err");
    }
  };

  // console.log(appdata)
  const checker = () => {
    appdata.map((x) => {
      if (
        curr
          .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
          .replace(/\s/g, "")
          .replace("GOVTOFSINDH", " ")
          .replace(/\s/g, "")
          .replace("-", " ")
          .replace(/\s/g, "")
          .replace("SINDH", " ")
          .replace(/\s/g, "") === x.car_num
      ) {
        alert("yes");
      } else {
        alert("no");
      }
    });
  };

  return (
    <DashboardLayout>
      {/* <BasicLayout> */}
      <form onSubmit={(e) => e.preventDefault()} id="form">
        <input placeholder="Upload Photo" type="file" onChange={uploadImage} />
        <button onClick={getNumber} disabled={flag} className="btn btn-primary" type="submit">
          Add Car
        </button>
      </form>

      <h1>
        Number Plate:{" "}
        {curr
          .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
          .replace(/\s/g, "")
          .replace("GOVTOFSINDH", " ")
          .replace(/\s/g, "")
          .replace("-", " ")
          .replace(/\s/g, "")
          .replace("SINDH", " ")
          .replace(/\s/g, "")}
      </h1>
      {/* {dot?alert("No Online Appointment"):null} */}
      {tat == true ? (
        <Button onClick={() => navigate("/tables ")}>Checkin</Button>
      ) : (
        <Button disabled={true}>Checkin</Button>
      )}
      <Table striped bordered hover variant="grey">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number plate</th>
            <th>Date</th>
            <th>Time</th>
            <th>Phone number</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control
                value={custName}
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={(e) => setCustName(e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                value={car_num}
                type="text"
                placeholder="Enter Number plate"
                name="car num"
                onChange={(e) => setCarNum(e.target.value)}
              />
            </td>
            <td>
              <Form.Control
                value={mydate}
                type="date"
                placeholder="Enter Date"
                name="date"
                onChange={(e) => setMydate(e.target.value)}
                // disabledDays={{ before: today }}
              />
            </td>
            <td>
              <Select value={slot} onChange={setSlot} options={statusOpt} />
            </td>
            <td>
              <Form.Control
                value={cust_num}
                type="text"
                placeholder="Enter Phone number"
                name="phone"
                onChange={(e) => setCustNum(e.target.value)}
              />
            </td>
            <td>
              <Button
                style={{
                  background: "#0e7a57",
                  borderRadius: "5",
                  border: "0",
                  marginLeft: "1px",
                }}
                onClick={bookitnowfun}
              >
                Add
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <div style={{ marginTop: 10 }}></div>
      <Table striped bordered hover>
        <thead style={{ backgroundColor: "rgb(78,166,146)" }}>
          <tr>
            <th>#</th>

            <th>Name</th>
            <th>Number plate</th>
            <th>Date</th>
            <th>Time</th>
            <th>Phone Number</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {appdata.map((val, key) => {
            // alert(val.cust_car)
            return (
              <>
                {val.type == "walkin" ? (
                  <tr key={val.idbooking}>
                    <td></td>
                    <td>{val.cust_name}</td>
                    <td>{val.car_num.toUpperCase()}</td>
                    <td>{val.book_date}</td>
                    <td>{val.book_slot}</td>
                    <td>{val.cust_num}</td>
                    <td>{val.type}</td>
                  </tr>
                ) : null}
              </>
            );
          })}
        </tbody>
      </Table>
      <div style={{ marginTop: 5 }}></div>

      <Table striped bordered hover>
        <thead style={{ backgroundColor: "rgb(78,166,146)" }}>
          <tr>
            <th>#</th>

            <th>Name</th>
            <th>Number plate</th>
            <th>Date</th>
            <th>Time</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appdata.map((val, key) => {
            // alert(val.cust_car)
            return (
              <>
                {val.type == "online" ? (
                  <tr key={val.idbooking}>
                    <td></td>
                    <td>{val.cust_name}</td>
                    <td>{val.car_num.toUpperCase()}</td>
                    <td>{val.book_date}</td>
                    <td>{val.book_slot}</td>
                    <td>{val.cust_num}</td>
                    <td>{val.type}</td>
                  </tr>
                ) : null}
              </>
            );
          })}
        </tbody>
      </Table>

      {/* </BasicLayout> */}

      {/* <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button type="submit" onClick={capture}>
        Capture photo
      </button> 
      {/* {imgSrc && <img src={imgSrc} alt="cam" />} 
  <button type="submit">Save image</button>  */}
    </DashboardLayout>
  );
}

// https://www.npmjs.com/package/react-webcam
