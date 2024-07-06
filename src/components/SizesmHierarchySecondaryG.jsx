import PropTypes from "prop-types";
import "./SizesmHierarchySecondaryG.css";

const SizesmHierarchySecondaryG = ({ className = "", circle, text }) => {
  return (
    <div className={`sizesm-hierarchysecondary-g ${className}`}>
      <div className="button-base1">
        <img className="circle-icon" alt="" src={circle} />
        <div className="text1">{text}</div>
      </div>
    </div>
  );
};

SizesmHierarchySecondaryG.propTypes = {
  className: PropTypes.string,
  circle: PropTypes.string,
  text: PropTypes.string,
};

export default SizesmHierarchySecondaryG;
