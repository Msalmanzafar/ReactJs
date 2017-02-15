import React from 'react';
import ReactDOM from 'react-dom';
import Header from './App';
import './index.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Modal from './modal';
import Cart from './cart';
import Checkout from './checkout';
import Product from './product';

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);

const PRODUCTS = [
  { 
    id: 0, 
    src: 'https://images-na.ssl-images-amazon.com/images/I/51hwN6Va6RL._SX403_BO1,204,203,200_.jpg', 
    title: 'Pro Express.js', 
    url: 'http://amzn.to/1D6qiqk' 
  },
  { 
    id: 1, 
    src: 'https://images-na.ssl-images-amazon.com/images/I/41pINoeZygL._SX404_BO1,204,203,200_.jpg', 
    title: 'Practical Node.js', 
    url: 'http://amzn.to/NuQ0fM' 
  },
  { 
    id: 2, 
    src: 'https://images-na.ssl-images-amazon.com/images/I/51osBkkAboL._SX331_BO1,204,203,200_.jpg', 
    title: 'Express API Reference', 
    url: 'http://amzn.to/1xcHanf' 
  },
  { 
    id: 3, 
    src: 'reactquickly-cover.jpg', 
    title: 'React Quickly', 
    url: 'https://www.manning.com/books/react-quickly'
  },
  { 
    id: 4, 
    src: 'https://images.springer.com/sgw/books/medium/9781484217504.jpg', 
    title: 'Full Stack JavaScript', 
    url: 'http://www.apress.com/9781484217504'
  }
];


var Heading = function Heading() {
  return (
    <h1>Nile Book Store</h1>
  )
};


var Copy = function Copy() {
  return React.createElement(
    "p",
    null,
    "Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link will open book on a separate page."
  );
};


class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.isModal = (nextProps.location.state &&
      nextProps.location.state.modal)
    if (this.isModal &&
      nextProps.location.key !== this.props.location.key) {
      this.previousChildren = this.props.children
    }
  }
  render() {
    // console.log('Modal: ', this.isModal)
    return (
      <div className="well">
        <Heading/>
        <div>
          {(this.isModal)?this.previousChildren:this.props.children}
          {/* {this.props.children} */}
          {(this.isModal)?
            <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
              {this.props.children}
            </Modal> : ''
          }
        </div>
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <Copy/>
        <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
        <div>
          {PRODUCTS.map(picture => (
            <Link key={picture.id}
              to={
                {
                  pathname: `/products/${picture.id}`,
                  state: { 
                    modal: true,
                    returnTo: this.props.location.pathname 
                  }
                }
              }>
              <img alt="" style={{ margin: 10 }} src={picture.src} height="100" />
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
let cartItems = {}
const addToCart = (id) => {
  if (cartItems[id])
  {
    cartItems[id] += 1
  }
  else{
    cartItems[id] = 1
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/products/:id" component={Product}
        addToCart={addToCart}
        products={PRODUCTS} />
      <Route path="/cart" component={Cart}
      cartItems={cartItems} products={PRODUCTS}/>
    </Route>
    <Route path="/checkout" component={Checkout}
      cartItems={cartItems} products={PRODUCTS}/>
  </Router>
), document.getElementById('content'))
