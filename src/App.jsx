import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <>
      <section className="bg-[#fae5d3]">
        <header>
          <Header />
        </header>
        <div className="w-[70rem] mx-auto ">
          <main className="min-h-screen flex items-center justify-center">
            <Hero />
            {/* <h1 className="text-3xl font-bold">Omnifood — React + Tailwind</h1> */}
          </main>
        </div>
      </section>
    </>
  );
};

export default App;
