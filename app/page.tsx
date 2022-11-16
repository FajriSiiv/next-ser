import React from "react";
import Button from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import Service from "../components/Services";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="">
      <Jumbotron />
      <article className="">
        <Service />
      </article>
    </div>
  );
}
