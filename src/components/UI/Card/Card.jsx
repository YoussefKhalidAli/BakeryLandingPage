import "./Card.css";

const Card = ({ stories, option }) => {
  return (
    <div className="card">
      <h5>{stories}stories</h5>
      <h1>Price</h1>
      <h6>delievery</h6>
      <span>
        {option?.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))}
      </span>
    </div>
  );
};

export default Card;
