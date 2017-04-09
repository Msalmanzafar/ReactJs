import React from 'react';
import * as mat from 'material-ui';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

//   handleTouchTap = () => {
//     this.setState({
//       open: true,
//     });
//   };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        {/*<mat.RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar"
        />*/}
        <mat.Snackbar
          open={this.state.open}
          message={this.props.message}
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}