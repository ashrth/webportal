import React from "react";
import GoogleMap from "./GoogleMap";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = (props) => {
const country=props.data.location.toLowerCase()
  const inputData = props.data;

  const countries = [{ india: { latitude: 20.7041, longitude: 78.1025 } },
    { usa: { latitude: 47.7511, longitude: 120.7401 }},
    { china: { latitude:  35.8617, longitude: 104.1954 }},
    {australia:{latitude:-33.42004148 ,longitude:151.3000048}},
    {brazil:{latitude:-5.809995505 ,longitude:-46.14998438}},
    {canada:{latitude:50.15002545 ,longitude:-96.88332178}},
    {denmark:{latitude:55.70900103 ,longitude:9.534996498}},
    {france:{latitude:	45.89997479 ,longitude:6.116670287}},
    {germany:{latitude:	49.98247246 ,longitude:8.273219156}},
    {japan:{latitude:34.67202964 ,longitude:133.9170865}},
    {singapore:{latitude:	1.293033466 ,longitude:103.8558207}},
    {spain:{latitude: 38.91200402,longitude:-6.337997512}},
    {uk:{latitude:55.93329002 ,longitude:-4.750030763}},
    
    

    
  ];
  let latitude
  let longitude
  for(let i=0; i<countries.length; i++){
    if(country in countries[i] ){

      console.log("hello")

longitude=countries[i][country].longitude
latitude=countries[i][country].latitude
    }
  }

  return (
    <div>
      <Header />
      <Sidebar />

      <div className="name">
     
        Hello, <h4>{inputData.firstname} </h4>
      </div>
      
      <main>
        <div className="div1">
          <h2>Total Users</h2>
          <h3>{inputData.totalusers}</h3>{" "}
        </div>
        <div className="div2">
          <h2> User accessing application from</h2>
          <GoogleMap latitude={latitude} longitude={longitude}/> {" "}
        </div>
        <div className="div1">
          {" "}
          <h2>Login Failed </h2> <h3>{inputData.loginsfailed} </h3>
        </div>

        <div className="div1">
          <h2> Total Groups</h2> <h3>{inputData.totalgroups} </h3>{" "}
        </div>
        <div className="div1">
          <h2>Active Users </h2> <h3> {inputData.activeusers} </h3>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
