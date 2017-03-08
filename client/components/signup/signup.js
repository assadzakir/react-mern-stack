/**
 * Created by Anonmous on 2/27/2017.
 */
import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
const fieldStyle = {width: '80%'}
const buttonStyle = {width: '100%'}

export default class SignupForm extends Component {


    static propTypes = {

        onSignup: PropTypes.func.isRequired
    }

    state = {errors: {}}

    reset = () =>
        this.setState({
            errors: {},
            firstName: null,
            email: null,
            lastName: null,
        })

    handleSignup = e => {
        e.preventDefault()
        const {firstName, lastName, email, password, errors} = this.state
        if (!email || !password) {
            if (!firstName) errors.firstName = 'Username Is Required'
            if (!email) errors.email = 'Username Is Required'
            if (!password) errors.password = 'Username Is Required'
            return this.setState({errors})
        }
        console.log(this.state)
        this.props.onSignup(this.state)
    }

    /* handleChange = (event, index, value) =>

     this.setState(
     {value:value
     ,role:event.nativeEvent.target.innerText
     });*/

    render() {
        return (
            <form style={{padding: '16px', margin: '0px'}} className='LoginForm' onSubmit={this.handleSignup}>

                <TextField
                    hintText='First Name'
                    floatingLabelText='First Name'
                    onChange={({target}) => {
                        this.setState({firstName: target.value})
                    }}
                    style={fieldStyle}/>
                <TextField
                    hintText='Last Name'
                    floatingLabelText='Last Name'
                    onChange={({target}) => {
                        this.setState({lastName: target.value})
                    }}
                    style={fieldStyle}/>

                <TextField
                    hintText='Email'
                    floatingLabelText='Email'
                    onChange={({target}) => {
                        this.setState({email: target.value})
                    }}
                    style={fieldStyle}
                />
                <TextField
                    hintText='password'
                    floatingLabelText='Password'
                    onChange={({target}) => {
                        this.setState({password: target.value})
                    }}
                    style={fieldStyle}
                    type='password'
                />
                <div className='LoginForm-Submit'>
                    <RaisedButton
                        label='Sign Up'
                        primary
                        type='submit'
                        style={buttonStyle}
                    />
                </div>
            </form>
        )
    }
}