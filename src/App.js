import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import PersonForm from "./components/PersonForm";
import Table from "./components/Table";

function App() {
  const [participants, setParticipants] = useState([
    // { name: "Iñaki Calvo", time: 2, rate: 20 },
  ]);

  const addParticipant = (participantInfo) => {
    setParticipants([...participants, participantInfo]);
  };

  return (
    <main>
      <section id="app">
        <div className="App">
          <div className="header">
            <h1>Meeting cost calculator</h1>
            <p className="lead">
              Enter the data and you will get the total cost of your meeting!
            </p>
          </div>
          <div className="row">
            <PersonForm addParticipant={addParticipant} />
            <Table participants={participants} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
