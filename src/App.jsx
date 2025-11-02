import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <>
      <div className="w-[70rem] mx-auto">
        <header>
          <Header />
        </header>
        <main className="min-h-screen flex items-center justify-center">
          <Hero />
          {/* <h1 className="text-3xl font-bold">Omnifood — React + Tailwind</h1> */}
        </main>
      </div>
    </>
  );
};

export default App;
