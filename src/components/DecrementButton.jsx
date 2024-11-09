import { PropTypes } from "prop-types";

const DecrementButton = ({ onDecrement }) => {
  return (
    <div className="dec-btn-wrapper">
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

DecrementButton.propTypes = {
  onDecrement: PropTypes.func.isRequired,
};

export default DecrementButton;
