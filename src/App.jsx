import React from "react";
import TopBar from "./Components/TopBar.jsx";
import RecentDonations from "./Components/RecentDonations.jsx"
import {  } from " Progress from "<div className="" />
<Components />
<Progress className="jsx"></Progress>;
import "./App.css";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">{/* Recent Donations */}
        </section>


        <section className="">
          
          {/* Progress */}
          {/*<div id="Randy"></div> */}
          {/*}
          
          {/* Donation Form */}
        </section>
      </main>
    </>
  );
}

export default App;
