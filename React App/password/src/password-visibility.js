import React from 'react';
class PasswordVisibility extends React.Component {
    render() {
        return (
            <label className="form-control">
                <input className=""
                type="checkbox"
                checked={this.props.checked} 
                onChange={this.props.onChange}/> Show password 
            </label>
        )
    }
}
export default PasswordVisibility;