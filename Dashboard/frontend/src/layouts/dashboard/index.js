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
import Grid from "@mui/material/Grid";
// import Table from "react-bootstrap/Table";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import "./style.css";
// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { useState, useEffect } from "react";
import axios from "axios";

let sunday = 0;
let saturday = 0;
let monday = 0;
let tuesday = 0;
let wednesday = 0;
let friday = 0;
let thursday = 0;

let jan = 0;
let feb = 0;
let mar = 0;
let apr = 0;
let may = 0;
let jun = 0;
let jul = 0;
let aug = 0;
let sep = 0;
let oct = 0;
let nov = 0;
let dec = 0;

let userCounter = 0;

let one=0;
let two=0;
let three=0;
let four=0;
let five=0
function Dashboard() {
  let dayname;
  const val = [];
  // const { tasks } = reportsLineChartData;
  const [done, setDone] = useState([]);
  const [statstate, setStatstate] = useState();
  const [sum, setSum] = useState();
  const [walkcount,setWalkCount]=useState("");
  useEffect(async () => {
    refreshing()
  }, []);

  // console.log();
  // temp = temp + "";
  // console.log(done);

  // https://bobbyhadz.com/blog/javascript-count-occurrences-of-each-element-in-array
  let appointmentcount = 0;
  let summer = 0;
  let credit=0;
  let walk=0;
  const walkinapp=async()=>{
    const temp =await axios("http://localhost:3001/getWalkin");
    let a =temp.data;
    a.forEach((x)=>{
      // console.log(x.type)
      let flag=x.type;
      if(flag){
        walk++;
      }
    })
    setWalkCount(walk);
  }
  const allmoney=async()=>{
    const money =await axios("http://localhost:3001/getCost");
    let t = money.data;
    t.forEach((s)=>{
      const lol = parseInt(s.totalCash, 10);
      // alert(lol)
      credit +=lol;
    })
    setSum(credit)
  }
  const myfunn=async()=>{
    const daa =await axios("http://localhost:3001/timely");
    let t = daa.data;
    t.forEach((s)=>{
      console.log(s.book_slot)
      if(s.book_slot=='1-2'){
        one++;
      }
      else if(s.book_slot=='2-3'){
        two++;
      }
      else if(s.book_slot=='3-4'){
        three++;
      }
      else if(s.book_slot=='3-4'){
        four++;
      }
      else{
        five++;
      }
      
      
    })
  }
  const refreshing = async () => {
    userCounter = 0;
    allmoney()
    walkinapp()
    myfunn()
    const result = await axios("http://localhost:3001/getdate");
    // console.log(money.data)
// var size = Object.keys(result.data).length;

    const userdata = await axios("http://localhost:3001/totaluser");
    const y = userdata.data;
    const z=result.data;
    console.log(z)
    y.forEach((n) => {
      userCounter += 1;
      // console.log(n);
      // const lol = parseInt(n.totalCash, 10);
      // console.log(typeof lol);
      // summer += lol;
      // console.log(summer);
    });
    
    // setSum(summer);
    // console.log("asdsadsa");
    function isToday(dateParameter) {
      const today = new Date();
      return (
        dateParameter.getDate() === today.getDate() &&
        dateParameter.getMonth() === today.getMonth() &&
        dateParameter.getFullYear() === today.getFullYear()
      );
    }

    const x = result.data;

   
    const dt = new Date();
    const day = dt.getDate();
    const month = dt.getMonth() + 1;
    const year = dt.getFullYear();

    const fullDate = `${year}-${month}-${day}`;
    // console.log(fullDate);
    // console.log(summer);
    const arr = [];
    // const text = "HELLO WORLD";
    jan = 0;
    feb = 0;
    mar = 0;
    apr = 0;
    may = 0;
    jun = 0;
    jul = 0;
    aug = 0;
    sep = 0;
    oct = 0;
    nov = 0;
    dec = 0;
    // x.forEach((dat)=>{
    //   console.log(dat.book_date)
    // })
    x.forEach((element) => {
      // https://codepen.io/codeforgeek/pen/mgxwNa
      // alert(element.appdate)
      const stat = isToday(new Date(element.book_date));
      // const strdt = element.appdate;
      // console.log(strdt);

      // console.log(d);
      const d = new Date(element.book_date);
      const tee = d.getMonth() + 1;
      // console.log(typeof tee);
      // console.log(tee);
      if (tee === 1) {
        jan += 1;
      } else if (tee === 2) {
        feb += 1;
      } else if (tee === 3) {
        mar += 1;
      } else if (tee === 4) {
        apr += 1;
      } else if (tee === 5) {
        may += 1;
      } else if (tee === 6) {
        jun += 1;
      } else if (tee === 7) {
        jul += 1;
      } else if (tee === 8) {
        aug += 1;
      } else if (tee === 9) {
        sep += 1;
      } else if (tee === 10) {
        oct += 1;
      } else if (tee === 11) {
        nov += 1;
      } else if (tee === 12) {
        dec += 1;
      }
      // console.log(tee);
      // const te = month[d.getMonth()];

      // const tem = console.log(monthval);
      console.log(stat)
      if (stat) {
       
        appointmentcount += 1;
      }
      // console.log("Is today ? ", stat);
      arr.push(element.book_date);
    });
    setStatstate(appointmentcount);
    // console.log(appointmentcount);
    // https://devsheet.com/code-snippet/get-the-day-name-from-given-date-in-javascript/
    sunday = 0;
    saturday = 0;
    monday = 0;
    tuesday = 0;
    wednesday = 0;
    thursday = 0;
    friday = 0;
console.log(arr)
    arr.forEach((element) => {
      const datestr = element;
      const date = new Date(datestr);
      dayname = date.toLocaleDateString("default", { weekday: "short" });

      if (dayname === "Sun") {
        sunday += 1;
      } else if (dayname === "Sat") {
        saturday += 1;
      } else if (dayname === "Fri") {
        friday += 1;
      } else if (dayname === "Thu") {
        thursday += 1;
      } else if (dayname === "Wed") {
        wednesday += 1;
      } else if (dayname === "Tue") {
        tuesday += 1;
      } else if (dayname === "Mon") {
        monday += 1;
      }

      // console.log(dayname);
      val.push(dayname);
    });
    // console.log(val);
    const count = {};
    val.forEach((element) => {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    });

    const propertyNames = Object.values(count);

    setDone(propertyNames);
  };
  // console.log(jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec);
  // console.log(done);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title=" Today's Appointments"
                count={statstate}
                percentage={{
                  color: "success",
                  amount: "todays",
                  label: "# of appointment",
                }}
              />
            </MDBox>
          </Grid>
         
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Registered Users"
                count={userCounter}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue (PKR)"
                count={sum}
                percentage={{
                  color: "success",
                  // amount: "+1%",
                  label: "this Year",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Appointments this year"
                count={walkcount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        <MDBox mt={4.5}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Days wise Appointment"
                  description="Number of appointment according to weekdays"
                  date="This week report"
                  chart={{
                    labels: ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
                    datasets: {
                      label: "appointments",
                      data: [monday, tuesday, wednesday, thursday, friday, saturday, sunday],
                    },
                  }}
                />
               
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="month wise result"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={{
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    datasets: {
                      label: "Mobile apps",
                      data: [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec],
                    },
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Time Based"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={{
                    labels: ["1-2","2-3","3-4","4-5","5-6"],
                    datasets: {
                      label: "Mobile apps",
                      data: [one,two,three,four,five],
                    },
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid> */}
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid> */}
            <Grid item xs={12} md={6} lg={4}>
              {/* <Table striped bordered hover variant="grey">
                <thead>
                  <tr>
                    <th>Car #</th>
                    <th>Booking Date</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Phone number</th>
                  </tr>
                </thead>

                <tbody>
                  {bundle.map((val, key) => {
                    return (
                      <>
                        <tr key={key}>
                          <td>{val.subtitle}</td>
                          <td>{val.status ? <p>yes</p> : <p>No</p>}</td>
                          <td>{val.resp}</td>
                          <td>{val.autho}</td>
                          <td>{val.duedate}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table> */}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
