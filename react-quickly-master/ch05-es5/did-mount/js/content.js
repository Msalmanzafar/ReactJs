var Content = React.createClass({
  displayName: "Content",

  componentWillMount() {
    console.log(ReactDOM.findDOMNode(this));
  },
  componentDidMount() {
    console.dir(ReactDOM.findDOMNode(this));
  },
  render: function () {
    return React.createElement("div", null);
  }
});