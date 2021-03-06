import react from 'react';
import React from 'react';



class Signin extends react.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }

  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value })
  }
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
  }
  onSubmitSignIn = () => {
    fetch('https://fast-beyond-04962.herokuapp.com/Signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home')
        }
      })

  }


  render() {
    const { onRouteChange } = this.props
    return (
      <article className="mw6 center shadow-5 br3 pa3 pa4-ns mv4 dark-gray">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="center f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange('Register')}
                className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    )
  }
}


export default Signin;