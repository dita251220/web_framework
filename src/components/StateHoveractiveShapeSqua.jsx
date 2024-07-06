import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StateHoveractiveShapeSqua.css";

const StateHoveractiveShapeSqua = ({
  className = "",
  carNumber,
  stateHoveractiveShapeSquaBackgroundColor,
  stateHoveractiveShapeSquaPosition,
}) => {
  const stateHoveractiveShapeSquaStyle = useMemo(() => {
    return {
      backgroundColor: stateHoveractiveShapeSquaBackgroundColor,
      position: stateHoveractiveShapeSquaPosition,
    };
  }, [
    stateHoveractiveShapeSquaBackgroundColor,
    stateHoveractiveShapeSquaPosition,
  ]);

  return (
    <div
      className={`statehoveractive-shapesqua ${className}`}
      style={stateHoveractiveShapeSquaStyle}
    >
      <div className="content">
        <div className="number">{carNumber}</div>
      </div>
    </div>
  );
};

StateHoveractiveShapeSqua.propTypes = {
  className: PropTypes.string,
  carNumber: PropTypes.string,

  /** Style props */
  stateHoveractiveShapeSquaBackgroundColor: PropTypes.any,
  stateHoveractiveShapeSquaPosition: PropTypes.any,
};

export default StateHoveractiveShapeSqua;
