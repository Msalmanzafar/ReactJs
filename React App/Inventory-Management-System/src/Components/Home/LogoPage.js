import React, { Component } from 'react';
import logo from '../../images/04.png'

const styles = {
    logo: {
        width: '50%',
        height: 'auto',
        top: '35px',
        position:'relative'
    }
}

class LogoPage extends Component {
    render() {
        return (
            <div>
                <center>
                    <img src={logo} style={styles.logo} alt="inventory-management" />
                </center>
            </div>
        );
    }
}

export default LogoPage;