import React from 'react';

class PasswordGenerate extends React.Component{
    render() {
        return (
            <button {...this.props} className="btn generate-btn">{this.props.children}</button>
        )
    }
} 
export default PasswordGenerate;