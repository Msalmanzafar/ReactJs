import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import generatePassword from './generate-password';
import rules from './rules';
import PasswordGenerate from './password-generate';
import PasswordInfo from './password-info.jsx';
import PasswordInput from './password-input.jsx';
import PasswordVisibility from './password-visibility.jsx';

class Password extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            strength: {},
            password: '',
            visible: false,
            ok: false
        }
        this.generate = this.generate.bind(this)
        this.checkStrength = this.checkStrength.bind(this)
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }
    checkStrength(event) {
        let password = event.target.value
        this.setState({ password: password })
        let strength = {}
        Object.keys(this.props).forEach((key, index, list) => {
            if (this.props[key] && rules[key].pattern.test(password)) {
                strength[key] = true
            }
        })
        this.setState({ strength: strength }, () => {
            if (Object.keys(this.state.strength).length == Object.keys(this.props).length) {
                this.setState({ ok: true })
            } else {
                this.setState({ ok: false })
            }
        })
    }
    toggleVisibility() {
        this.setState({ visible: !this.state.visible }, () => {

        })
    }
    generate() {
        this.setState({
            visible: true,
            password: generatePassword()
        },
            () => {
                this.checkStrength({
                    target: { value: this.state.password }
                })
            })
    }
    render() {
        var processedRules = Object.keys(this.props).map((key) => {
            if (this.props[key]) {
                return {
                    key: key,
                    rule: rules[key],
                    isCompleted: this.state.strength[key] || false
                }
            }
        })
        return (
            <div className="well form-group col-md-6">
                <label>Password</label>
                <PasswordInput
                    name="password"
                    onChange={this.checkStrength}
                    value={this.state.password}
                    visible={this.state.visible} />
                <PasswordVisibility
                    checked={this.state.visible}
                    onChange={this.toggleVisibility} />
                <PasswordInfo rules={processedRules} />
                <PasswordGenerate onClick={this.generate}>
                    Generate
                </PasswordGenerate>
                <button className={'btn btn-primary' + ((this.state.ok) ? '' : ' disabled')}>
                    Save
                </button>
            </div>
        )
    }
}
