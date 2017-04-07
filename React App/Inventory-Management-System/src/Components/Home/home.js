import React, {Component} from 'react'
import { connect } from 'react-redux';


class Home extends Component{
    render(){
        console.log('user info',this.props.auth)
        return(
            <div>
                <h2>Home </h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer.authSignIn
  };
}
export default connect(mapStateToProps)(Home);