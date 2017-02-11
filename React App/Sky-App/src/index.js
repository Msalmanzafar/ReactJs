import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Menu from './script';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

let myTip = class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {opacity: false}
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        const {offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this)
            this.setState({
                opacity: !this.state.opacity,
                top,
                left
            })
    }

    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 15,
            left: (this.state.left || 0) - 50
        }
        return (
            
            <div style={{display: 'inline'}}>
                <span style={{color: 'blue'}}
                    onMouseEnter={this.toggle} 
                    onMouseOut={this.toggle}>
                    {this.props.children} 
                </span>
                    <div className="tooltip bottom" style={style} role="tooltip">
                        <div className="tooltip-arrow"></div>
                            <div className="tooltip-inner">
                                {this.props.text} 
                            </div>
                    </div>
            </div>
        )
    }
}
ReactDOM.render(
  React.createElement('div',null,React.createElement(
      myTip,
      { text: 'Master Express.js-The Node.js Framework For Your Web Development' },
      'Pro Express.js'
  ),
  ' was published in 2014. It was one of the first books on v4.x. '
  + 'And it was my second book published with Apress after ',
  React.createElement(
      myTip,
    { text: 'Practical Node.js: Building Real-World Scalable Web Apps' },
    'Practical Node.js'
  ),
  '. ... The main focus of this post is to compare the four Node.js/Io.js frameworks: ',
  React.createElement(
      myTip,
    { text: 'HTTP API server' },
    'Hapi'
  ),
  ', ',
  React.createElement(
      myTip,
    { text: 'Release the Kraken!' },
    'Kraken'
  ),
  ', ',
  React.createElement(
      myTip,
    { text: 'Sail away' },
    'Sails.js'
  ),
  ' and ',
  React.createElement(
      myTip,
    { text: 'IBM of frameworks' },
    'Loopback'
  ),
  '. There are many other frameworks to consider, but I had to draw the line somewhere.'
), document.getElementById('tooltips'));

// ReactDOM.render(
//   <Menu />,
//   document.getElementById('menu')
// );
