import React, { Component } from 'react';
import store from '../../images/store.png'

const styles = {
    logo: {
        width: '60vw',
        height: 'auto',
        top: '30px',
        position:'relative'
    }
}

class FrontLogo extends Component {
    render() {
        return (
            <div>
                <center>
                    <img src={store} style={styles.logo} alt="inventory-management" />
                </center>
            </div>
        );
    }
}

export default FrontLogo;