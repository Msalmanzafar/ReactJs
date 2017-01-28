
let Content = React.createClass({
  displayName: 'Content',

  getInitialState() {
    this.launchClock();
    return {
      counter: 0,
      currentTime: new Date().toLocaleString()
    };
  },
  launchClock() {
    setInterval(() => {
      this.setState({
        counter: ++this.state.counter,
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  },
  render() {
    if (this.state.counter > 2) return React.createElement('div', null);
    return React.createElement(Display, { time: this.state.currentTime });
  }
});
let Display = React.createClass({
  displayName: 'Display',

  componentWillMount: function () {
    console.log('componentWillMount is triggered');
  },
  componentDidMount: function (e) {
    console.log('componentDidMount is triggered');
    console.log('DOM node: ', ReactDOM.findDOMNode(this));
  },
  componentWillReceiveProps: function (newProps) {
    console.log('componentWillReceiveProps is triggered');
    console.log('new props: ', newProps);
  },
  shouldComponentUpdate: function (newProps, newState) {
    console.log('shouldComponentUpdate is triggered');
    console.log('new props: ', newProps);
    console.log('new state: ', newState);
    return true;
  },
  componentWillUpdate: function (newProps, newState) {
    console.log('componentWillUpdate is triggered');
    console.log('new props: ', newProps);
    console.log('new state: ', newState);
  },
  componentDidUpdate: function (oldProps, oldState) {
    console.log('componentDidUpdate is triggered');
    console.log('new props: ', oldProps);
    console.log('old props: ', oldState);
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount');
  },
  render: function () {
    // console.log('rendering... Display')
    return React.createElement(
      'div',
      null,
      this.props.time
    );
  }
});