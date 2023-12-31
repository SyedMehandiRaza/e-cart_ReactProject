import React from 'react';

const CartItem = (props) => {
    // console.log('this.props', this.props);
    const { price, title, qty } = props.product;
    const { product, 
      onIncreaseQuantity, 
      onDecreaseQuantity, 
      onDeleteProduct } = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src='https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png'
              onClick={() => onIncreaseQuantity(product)}
              />
            <img
              alt="decrease"
              className="action-icons"
              src='https://cdn-icons-png.flaticon.com/512/659/659892.png'
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://www.nicepng.com/png/detail/362-3620680_delete-icon-png-download-.png"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;