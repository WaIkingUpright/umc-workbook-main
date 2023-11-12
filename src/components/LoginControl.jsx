import React from 'react'

function LoginButton(props) {
    return (
      <button onClick={props.onClick} className='loginBtn'>
        로그인
      </button>
    );
  }
  
function LogoutButton(props) {
    return (
        <button onClick={props.onClick} className='loginBtn'>
            로그아웃
        </button>
    );
}
function GreetingT(props){
    return(
        <p>환영합니다!</p>
    )
}
function GreetingF(props){
    return(
        <p>로그인 해주세요!</p>
    )
}
class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button,text;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
        text = <GreetingT />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
        text = <GreetingF />;
      }
  
      return (
        <div className='login'>
            {button}
            {text}
        </div>
      );
    }
}

export default LoginControl;