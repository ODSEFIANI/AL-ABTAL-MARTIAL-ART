import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Disciplines } from "./components/Disciplines";
import { Schedule } from "./components/Schedule";
import { Contact } from "./components/Contact";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <div className="bg-primary text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Schedule />
      </main>
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default App;
