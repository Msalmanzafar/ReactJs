var textAreaCounter = React.createClass({

    propTypes: {
        text: React.PropTypes.string,
    },
    getInitialState: function () {
        return{
            text: 'Bob',
        };
    },
    _textChange: function(ev){
        this.setState({
            text: ev.target.value,
        });
    },
    render: function() {
        console.log("this.state", this.props)

        return React.DOM.div(null,
            React.DOM.textarea({
                defaultValue: this.state.text,
                onChange: this._textChange,
            }),
            React.DOM.h3(null, this.state.text.length)
        );
    }
    })
    ReactDOM.render(
        React.createElement(textAreaCounter, {
        text: "salman",
        }),
        document.getElementById("app")
    )




// const { createElement } = React;
// const {render} = ReactDOM;
//
// const style = {
//     backgroundColor: 'Orange',
//     color: 'white',
//     fontFamily: 'verdana'
// };
// const title = createElement(
//     'h1',
//     {id: 'title', className: 'header', style:style},
//     'Hello Sky world..!'
// );
// render(
//     title,
//     document.getElementById('react-id')
// );
// var Component = React.createClass({
//     render: function() {
//         return React.DOM.span(null, "I'm so custom");
//     }
// });
// ReactDOM.render(
//     React.createElement(Component),
//     document.getElementById("app")
// );

// var TextAreaCounter = React.createClass({
//     propTypes: {
//         text: React.PropTypes.string,
//     },
//     getDefaultProps: function() {
//         return {
//             text: '',
//         };
//     },
//     render: function() {
//         return React.DOM.div(null,
//             React.DOM.textarea({
//                 defaultValue: this.props.text,
//             }),
//             React.DOM.h3(null, this.props.text.length)
//         );
//     }
// });
//
// ReactDOM.render(
//     React.createElement(TextAreaCounter, {
//         text: "salman",
//     }),
//     document.getElementById("app")
// );

// var Component = React.createClass({
//     propTypes: {
//         name: React.PropTypes.string.isRequired,
//     },
//     render: function() {
//         return React.DOM.span(null, "My name is " + this.props.name);
//     }
// });
// ReactDOM.render(
//     // React.createElement(Component, {
//     //    // name: "Salman",
//     // }),
//     React.createElement(Component, {
//         name: 123,
//     }),
//     document.getElementById("app")
// );
// var h1 = React.createElement('h1', null, 'Hello world!', style: style)ReactDOM.render(
//   h1,
//   document.getElementById('content')
// )

//Usage without the h1 variable
// ReactDOM.render(
//   React.createElement('h1', null, 'Hello Sky world!'),
//   document.getElementById('content')
// )