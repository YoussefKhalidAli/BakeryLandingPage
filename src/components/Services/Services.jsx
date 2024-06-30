import { forwardRef } from "react";
import Card from "../UI/Card/Card";
import "./Services.css";

const options = [
  ["25% upfront", "2 week notice", "Sprinkles", "One Flavour"],
  ["25% upfront", "2 week notice", "Gold Leaves", "One Flavour"],
  ["50% upfront", "4 week notice", "Chocolate shavings", "Multiple Flavour"],
  ["50% upfront", "4 week notice", "Ribbons", "Multiple Flavour"],
  ["100% upfront", "6 week notice", "Pearls and Bows", "Multiple Flavour"],
];
const Services = forwardRef(({}, ref) => {
  return (
    <div ref={ref} className="servicesContainer">
      <h1>What We Offer!</h1>
      <span>
        {options.map((option, index) => (
          <Card key={index} stories={index + 3} option={option} />
        ))}
      </span>
    </div>
  );
});

export default Services;
