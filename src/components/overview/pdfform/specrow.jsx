import { useEffect } from 'react';
import './specbox.scss';
import PropTypes from "prop-types";

const SpecRow = ({ spec, amount, price }) => {

    
	return (
    <div className="srow">
      <div className="scol large"><p>{spec}</p></div>
      <div className="scol"><p>{amount}</p></div>
      <div className="scol"><p>{price}</p></div>
      <div className="scol"><p>{amount*price}</p></div>
    </div>
	);
};

SpecRow.propTypes = {
  spec: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default SpecRow;
