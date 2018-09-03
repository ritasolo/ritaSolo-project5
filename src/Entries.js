import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Entries = props => {
  const entriesInOrder = props.allEntries.reverse();
  return (
    <section className="entriesSection" id="entriesSection">
      <h1>/ submissions /</h1>
      {entriesInOrder.map(entry => {
        const name = entry.userName.toLowerCase();
        const text = entry.text.toLowerCase();
        const title = entry.shortTitle.toLowerCase();
        return (
          <div class={entry.template} key={entry.postKey}>
            <div className="entryInfo">
              <ScrollAnimation animateIn="fadeInUp" duration="3">
                <p class="entryInfo__title">{title}</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" duration="3">
                <p class="entryInfo__name">by {name}</p>
              </ScrollAnimation>
            </div>
            <div class="textContainer">
              <ScrollAnimation animateIn="fadeInUp" duration="2">
                <p class="textContainer__p">{text}</p>
              </ScrollAnimation>
            </div>
            <div className="imgOne">
              <ScrollAnimation animateIn="fadeInUp" duration="3">
                <img src={entry.firstImageUrl} alt="first image URL" />
              </ScrollAnimation>
            </div>

            <div className="imgTwo">
              <ScrollAnimation animateIn="fadeInUp" duration="3">
                <img src={entry.secondImageUrl} alt="second image URL" />
              </ScrollAnimation>
            </div>
            <div className="imgThree">
              <ScrollAnimation animateIn="fadeInUp" duration="3">
                <img src={entry.thirdImageUrl} alt="third image URL" />
              </ScrollAnimation>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Entries;
