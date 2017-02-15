import React from'react';

class PasswordInput extends React.Component {
    render() {
        return (
            <input className="form-control"
                type={this.props.visible ? 'text' : 'password'}
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}/>
        )
    }
}
export default PasswordInput;