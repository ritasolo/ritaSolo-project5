import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Entries from "./Entries";
import Header from "./Header";
import Footer from "./Footer";
import firebase from "./firebase";
import "animate.css/animate.min.css";

const dbRef = firebase.database().ref("/zineEntries");

class App extends Component {
  constructor() {
    super();
    this.state = {
      postKey: null,
      allEntries: []
    };
  }

  componentDidMount() {
    dbRef.on("value", snapshot => {
      this.allEntries(snapshot.val());
    });
  }

  allEntries = entry => {
    const entryArray = Object.entries(entry).map(item => {
      const templates = [
        "template1",
        "template2",
        "template3",
        "template4",
        "template5"
      ];
      const template = templates[Math.floor(Math.random() * templates.length)];
      return {
        postKey: item[0],
        title: item[1].shortTitle,
        userName: item[1].userName,
        shortTitle: item[1].shortTitle,
        text: item[1].text,
        firstImageUrl: item[1].firstImageUrl,
        secondImageUrl: item[1].secondImageUrl,
        thirdImageUrl: item[1].thirdImageUrl,
        template: template
      };
    });
    this.setState({
      allEntries: entryArray
    });
  };

  handler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addInfoToDatabase = (
    userName,
    shortTitle,
    text,
    firstImageUrl,
    secondImageUrl,
    thirdImageUrl
  ) => {
    dbRef.push({
      userName: userName,
      shortTitle: shortTitle,
      text: text,
      firstImageUrl: firstImageUrl,
      secondImageUrl: secondImageUrl,
      thirdImageUrl: thirdImageUrl
    });
    this.setState({
      userName: userName,
      shortTitle: shortTitle,
      text: text,
      firstImageUrl: firstImageUrl,
      secondImageUrl: secondImageUrl,
      thirdImageUrl: thirdImageUrl
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Form addInfoToDatabase={this.addInfoToDatabase} />
        {this.state.allEntries && (
          <Entries allEntries={this.state.allEntries} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
