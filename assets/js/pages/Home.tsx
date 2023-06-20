import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Apple from "../components/Layouts/Apple";

const Home = () => {

  return (
    // Apple = Extend
    <Apple>
      <div className="container">
        <h1 className="mb-5">HOme</h1>
      </div>
    </Apple>
  );
};

export default Home;
