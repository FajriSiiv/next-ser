import React from "react";
import Button from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import Price from "../components/Price";
import RecentWork from "../components/Recent";
import Service from "../components/Services";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="">
      <Jumbotron />
      <article className="">
        <Service />
        <RecentWork />
        <Price />
      </article>
    </div>
  );
}
