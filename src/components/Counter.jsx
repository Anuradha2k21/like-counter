import PropTypes from "prop-types";

const Counter = ({ count }) => {
  return (
    <div className="count-wrapper">
      <h1>{count}</h1>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
