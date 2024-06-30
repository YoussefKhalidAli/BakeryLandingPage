import "./About.css";

import img3 from "../../assets/redcharlie-t-7KEq9M0b0-unsplash.jpg";
import { forwardRef } from "react";

const About = forwardRef(({}, ref) => {
  return (
    <div className="aboutContainer" ref={ref}>
      <img src={img3} alt="adawda" />
      <span>
        <h1>About us</h1>
        <p>
          Welcome to The Cake Boutique, where love is the secret ingredient in
          every wedding cake we create. Our passion for baking and commitment to
          excellence shine through in our meticulously crafted cakes, designed
          to make your special day truly unforgettable. With years of experience
          and a keen eye for detail, we blend traditional techniques with modern
          artistry to deliver cakes that are as beautiful as they are delicious.
          <br />
          Whether you envision a classic tiered cake, a contemporary
          masterpiece, or a unique custom design, we work closely with you to
          bring your dream wedding cake to life. At The Cake Boutique, we
          believe that every love story deserves a sweet beginning. Let us be
          part of your celebration, and make your wedding day extraordinary with
          a cake that tastes as wonderful as it looks.
        </p>
      </span>
    </div>
  );
});

export default About;
