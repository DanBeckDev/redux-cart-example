import React, { Component } from "react";
import { connect } from "react-redux";
import { addCart } from "../actions";

const mapStateToProps = state => {
  return {
    cartState: state.setCart.cartState
  };
};

const mapDispatchToProps = dispatch => ({
  addCart: itemName => dispatch(addCart(itemName))
});

class ShoppingItems extends Component {
  render() {
    const { cartState, addCart } = this.props;
    const list = ["TV", "Microwave", "Speakers"];
    const listItems = list.map((list, index) => (
      <tr key={index}>
        <td>{list}</td>
        <td>
          <button
            onClick={() => addCart(cartState.length === 0 ? list : ", " + list)}
          >
            Add to cart
          </button>
        </td>
      </tr>
    ));

    return (
      <table className="center">
        <tbody>{listItems}</tbody>
      </table>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingItems);
