import React from "react";

import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Omnifood — React + Tailwind</h1>
      </main>
    </>
  );
};

export default App;
