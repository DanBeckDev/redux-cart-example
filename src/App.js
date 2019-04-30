import React, { Component } from "react";
import ShoppingItems from "./components/ShoppingItems";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    cartState: state.setCart.cartState
  };
};

class App extends Component {
  render() {
    const { cartState } = this.props;
    return (
      <div className="App center">
        <h1>Products</h1>
        {<ShoppingItems />}
        <p>Cart contents: {cartState}</p>
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
