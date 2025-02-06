import React from "react";
import { Helmet } from "react-helmet";
import BannerTwo from "./BannerTwo";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Marco Ramcharan</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Marco Ramcharan. Explore projects, skills, and more by CodeByMarco."
        />
        <meta name="author" content="Marco Ramcharan" />
        <meta name="keywords" content="marco ramcharan, jokesbymarco" />
      </Helmet>
      <BannerTwo />
      <Contact />
    </div>
  );
};

export default Home;
