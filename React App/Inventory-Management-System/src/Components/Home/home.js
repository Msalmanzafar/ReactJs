import React, { Component } from 'react'
// import { connect } from 'react-redux';


class Home extends Component {
    render() {
        // console.log('user info', this.props.auth)
        return (
            <div>
                 {this.props.children}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         auth: state.AuthReducer.authSignIn
//     };
// }
// export default connect(mapStateToProps)(Home);
export default Home;