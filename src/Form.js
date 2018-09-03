import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      shortTitle: "",
      text: "",
      firstImageUrl: "",
      secondImageUrl: "",
      thirdImageUrl: "",
      postKey: "",
      template: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addInfoToDatabase(
      this.state.userName,
      this.state.shortTitle,
      this.state.text,
      this.state.firstImageUrl,
      this.state.secondImageUrl,
      this.state.thirdImageUrl,
      this.state.template
    );
    this.setState({
      userName: "",
      shortTitle: "",
      text: "",
      firstImageUrl: "",
      secondImageUrl: "",
      thirdImageUrl: "",
      postKey: "",
      template: ""
    });
  };

  render() {
    return (
      <ScrollAnimation animateIn="fadeInUp" duration="2">
        <section
          className="formSection"
          id="formSection"
          onSubmit={this.handleSubmit}
        >
          <form className="userForm">
            <input
              type="text"
              onChange={this.handleChange}
              name="userName"
              placeholder="your name"
              id="userName"
              value={this.state.userName}
            />
            <label htmlFor="userName" className="visuallyHidden">
              Your Name
            </label>

            <input
              type="textbox"
              onChange={this.handleChange}
              name="shortTitle"
              placeholder="title"
              id="shortTitle"
              value={this.state.shortTitle}
              maxlength="30"
            />

            <label htmlFor="shortTitle" className="visuallyHidden">
              Short Title
            </label>

            <input
              type="text"
              onChange={this.handleChange}
              name="text"
              placeholder="text"
              id="text"
              maxlength="250"
              value={this.state.text}
            />
            <label htmlFor="text" className="visuallyHidden">
              Any Text
            </label>

            <input
              type="text"
              onChange={this.handleChange}
              name="firstImageUrl"
              placeholder="First Image URL"
              id="firstImageUrl"
              value={this.state.firstImageUrl}
            />
            <label htmlFor="firstImageUrl" className="visuallyHidden">
              First Image URL
            </label>

            <input
              type="text"
              onChange={this.handleChange}
              name="secondImageUrl"
              placeholder="Second Image URL"
              id="secondImageUrl"
              value={this.state.secondImageUrl}
            />
            <label htmlFor="secondImageUrl" className="visuallyHidden">
              Second Image URL
            </label>

            <input
              type="text"
              onChange={this.handleChange}
              name="thirdImageUrl"
              placeholder="Third Image URL"
              id="thirdImageUrl"
              value={this.state.thirdImageUrl}
            />
            <label htmlFor="thirdImageUrl" className="visuallyHidden">
              Third Image URL
            </label>

            <input
              type="submit"
              action="#entriesSection"
              value="Post"
              class="submitButton"
            />
          </form>
        </section>
      </ScrollAnimation>
    );
  }
}

export default Form;
