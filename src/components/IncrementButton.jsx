import { PropTypes } from "prop-types";

const IncrementButton = ({ onIncrement }) => {
  return (
    <div className="inc-btn-wrapper">
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

IncrementButton.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};

export default IncrementButton;
