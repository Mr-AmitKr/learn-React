import React from "react";
import Card from "./components/Card"; 

const App = () => {
  const jobOpenings = [
    
  {
    id: 1,
    brandLogo: "https://i.pinimg.com/736x/27/e3/bf/27e3bfddb1445645f4e2ff5c4ba99dcc.jpg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    designation: "Frontend Web Developer",
    postTag1: "Full Time",
    postTag2: "Senior Level",
    payRate: "$120/hour",
    location: "Mumbai, India",
  },
  {
    id: 2,
    brandLogo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    companyName: "Google",
    datePosted: "2 days ago",
    designation: "UI/UX Designer",
    postTag1: "Part Time",
    postTag2: "Junior Level",
    payRate: "$90/hour",
    location: "Bangalore, India",
  },
  {
    id: 3,
    brandLogo: "https://i.pinimg.com/1200x/a6/58/b9/a658b9eb2a14b9c5a2f1c34e0e1a1aed.jpg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    designation: "React Developer",
    postTag1: "Full Time",
    postTag2: "Mid Level",
    payRate: "$110/hour",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    brandLogo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
    companyName: "Netflix",
    datePosted: "3 days ago",
    designation: "Backend Developer",
    postTag1: "Remote",
    postTag2: "Senior Level",
    payRate: "$140/hour",
    location: "Pune, India",
  },
  {
    id: 5,
    brandLogo: "https://i.pinimg.com/736x/1b/56/fd/1b56fd706cdbaa4646fd0472193d5005.jpg",
    companyName: "Apple",
    datePosted: "6 days ago",
    designation: "Mobile App Developer",
    postTag1: "Full Time",
    postTag2: "Junior Level",
    payRate: "$100/hour",
    location: "Delhi, India",
  },
  {
    id: 6,
    brandLogo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    companyName: "Meta",
    datePosted: "4 days ago",
    designation: "Full Stack Developer",
    postTag1: "Part Time",
    postTag2: "Senior Level",
    payRate: "$130/hour",
    location: "Chennai, India",
  },
  {
    id: 7,
    brandLogo: "https://i.pinimg.com/1200x/13/6c/c6/136cc6856f5666bbe48a32197c19b098.jpg",
    companyName: "Tesla",
    datePosted: "8 days ago",
    designation: "Software Engineer",
    postTag1: "Full Time",
    postTag2: "Mid Level",
    payRate: "$125/hour",
    location: "Noida, India",
  },
  {
    id: 8,
    brandLogo: "https://i.pinimg.com/736x/e2/b7/48/e2b74811d8f20d1373ec2d085d1fcfb7.jpg",
    companyName: "Spotify",
    datePosted: "10 days ago",
    designation: "UI Developer",
    postTag1: "Remote",
    postTag2: "Junior Level",
    payRate: "$85/hour",
    location: "Kolkata, India",
  },
  {
    id: 9,
    brandLogo: "https://i.pinimg.com/1200x/ed/41/94/ed41942d97749a5546eca67609007047.jpg",
    companyName: "Adobe",
    datePosted: "12 days ago",
    designation: "Graphic Designer",
    postTag1: "Contract",
    postTag2: "Senior Level",
    payRate: "$95/hour",
    location: "Ahmedabad, India",
  },
  {
    id: 10,
    brandLogo: "https://i.pinimg.com/736x/8a/15/b6/8a15b646a6856d20854c2ac22623d971.jpg",
    companyName: "LinkedIn",
    datePosted: "7 days ago",
    designation: "MERN Stack Developer",
    postTag1: "Full Time",
    postTag2: "Fresher",
    payRate: "$80/hour",
    location: "Jaipur, India",
  },
];
  return (
    <div className="parent">
 {jobOpenings.map(function(elem , index){
  return <div key={index}>
    <Card company={elem.companyName} post={elem.designation} brandLogo={elem.brandLogo} datePosted={elem.datePosted} Tag1={elem.postTag1} Tag2={elem.postTag2} Rate={elem.payRate} location={elem.location} />
    </div>
 })}
</div>
  );
};

export default App;