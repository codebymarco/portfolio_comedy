import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../components/AboutSection";
import BannerTwo from "./BannerTwo";
import Skills from "./Skills";
import Projects from "./Projects";
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
        <meta
          name="keywords"
          content="marco ramcharan, jokesbymarco"
        />
      </Helmet>
      <BannerTwo />
    </div>
  );
};

export default Home;
