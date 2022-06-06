const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "ice",
});
//checked
// App user Login  
app.post('/applogin',(req,res)=>{
  const cust_email = req.body.myemail;
  const cust_pass = req.body.pass;
  const cust_car = req.body.mycar;
  db.query("Select * from registration WHERE cust_email=? AND cust_pass=? AND cust_car=? ",[cust_email,cust_pass,cust_car],
  (err,result)=>{
    if(err){
      res.send({err:err})
    }
  
      if(result.length>0){
        res.send(result);
      }
      else{
        res.send({message:"Wrong Credentials"})
      }
    
  }
  )
})
//checked
 // App user registration
 app.post("/appreg", (req, res) => {

  const cust_email = req.body.myemail;
  const cust_name = req.body.username;
  const cust_car = req.body.carnum;
  const cust_pass = req.body.pass;
  const cust_phone = req.body.phone;
  console.log(cust_email)
  db.query("Insert into registration (cust_email,cust_name,cust_car,cust_pass,cust_phone) values (?,?,?,?,?)",[cust_email,cust_name,cust_car,cust_pass,cust_phone],
  (err,result)=>{
    if(err){
      res.send({err:err})
    }
  
      if(result){
        res.send("Signed");
      }
      else{
        res.send({message:"Wrong Input"})
      }
    
  }
  )
})
  
 
app.get("/timely",(req,res)=>{
  db.query("Select (book_slot) from booking",(err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      res.send(result);
      // console.log(result)
    }
  })
})



  
//checked
// getting slots data ;
app.get("/getslots",(req,res)=>{
  db.query("Select * from slots",(err,result)=>{
    if(err){
      console.log(err)
    }
    else{
      res.send(result);
      // console.log(result)
    }
  })
})



// app k through appointment
app.post("/mobileappointment",(req,res)=>{
  const cust_name=req.body.cust_name;
  const car_num = req.body.car_num.toUpperCase();
  const cust_num=req.body.cust_num;
  const book_date =req.body.mydate;
  const book_slot = req.body.cust_slot;
  const type= req.body.type;
  db.query("Insert into booking (cust_name,car_num,cust_num,book_date,book_slot,type) values (?,?,?,?,?,?)",[cust_name,car_num,cust_num,book_date,book_slot,type],
  
  (err,result)=>{
    console.log(err);
})

})
app.get("/displayapp", (req, res) => {
  db.query("Select * from booking order by idbooking  desc", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



// app.get("/totaluser", (req, res) => {
//   db.query("Select * from record", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });





app.post("/addapp", (req, res) => {
  const custcar = req.body.custcar;
  const custdate = req.body.custdate;
  const custnum = req.body.custnum;
  const status = req.body.status;
  const servicesStr = req.body.servicesStr;
  const serCashStr = req.body.serCashStr;
  const servicesStr2 = req.body.servicesStr2;
  const serCashStr2 = req.body.serCashStr2;
  const servicesStr3 = req.body.servicesStr3;
  const serCashStr3 = req.body.serCashStr3;
  const totalCash = req.body.totalCash;

  

  db.query(
    "INSERT INTO record (custcar,custdate,custnum,status,servicesStr,serCashStr,servicesStr2,serCashStr2,servicesStr3,serCashStr3,totalCash) VALUE (?,?,?,?,?,?,?,?,?,?,?)",
    [
      custcar.toUpperCase(),
      custdate,
      custnum,
      status,
      servicesStr,
      serCashStr,
      servicesStr2,
      serCashStr2,
      servicesStr3,
      serCashStr3,
      totalCash,
    ],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("inserting into appoint table");
      }
    }
  );
});
app.get("/totaluser", (req, res) => {
  db.query("Select * from registration", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getdate", (req, res) => {
  db.query("Select * from booking", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/getWalkin", (req, res) => {
  db.query("Select (type) from booking", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/getCost", (req, res) => {
  db.query("Select (totalCash) from record", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// app.get("/recordUser", (req, res) => {
//   db.query(`Select custcar,custdate,totalCash from record where custcar = ` + mysql.escape(req.body.custcar) , (err, result) => {
//     if (err) {  
//       console.log(err);
//     } else {
//       res.send(result);
    
//     }
//   });
// });
app.get("/recordUser", (req, res) => {
  db.query("Select * from record order by rec_id desc" , (err, result) => {
    if (err) {  
      console.log(err);
    } else {
      res.send(result);
    
    }
  });
});
// const date_str = "07/20/2021";
// const date = new Date(date_str);
// const full_day_name = date.toLocaleDateString('default', { weekday: 'long' });
// // -> to get full day name e.g. Tuesday

// const short_day_name = date.toLocaleDateString('default', { weekday: 'short' });
// console.log(short_day_name);
// // -> TO get the short day name e.g. Tue

app.get("/appHomeDate", (req, res) => {
  db.query("Select (book_date) from booking", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(3001, () => {
  console.log("db working");
});
