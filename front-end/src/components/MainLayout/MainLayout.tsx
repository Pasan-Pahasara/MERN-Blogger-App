import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
