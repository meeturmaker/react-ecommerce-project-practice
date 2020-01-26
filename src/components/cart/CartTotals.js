import React from "react";
import { Link } from "react-router-dom";
const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, clearCart, cartTotal } = value;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right ">
            <Link to="/">
              <button
                onClick={() => clearCart()}
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
              >
                Clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title">
                Subtotal:<strong>${cartSubTotal}</strong>
              </span>
            </h5>
            <h5>
              <span className="text-title">
                Tax:<strong>${cartTax}</strong>
              </span>
            </h5>
            <h5>
              <span className="text-title">
                total:<strong>${cartTotal}</strong>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartTotals;
