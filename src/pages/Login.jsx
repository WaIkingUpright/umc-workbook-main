import React from 'react'

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {isEmailOn: true, isPWOn: false};

        this.emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        this.emailChange = this.emailChange.bind(this);

        this.passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{1,}$/;
        this.passwordChange = this.passwordChange.bind(this);
    }
    passwordChange(event){
        this.setState(()=>({
            isPWOn: this.passwordRegExp.test(event.target.value)
        }));
    };
    emailChange(event){
        this.setState(()=>({
            isEmailOn: this.emailRegExp.test(event.target.value)
        }));
    };
    
    render(){
        return (
            <div className='appContainer'>
                <h1>이메일과 비밀번호를 입력해주세요!</h1>
                <form>
                    <p style={{color: "black"}}>이메일 주소</p>
                    <input className="mailAdress" name="mailAdress" placeholder='이메일 주소' onChange={this.emailChange}/>
                    <p style={this.state.isEmailOn ? {color:'white'} : {color:'red'}}>
                        올바르지 않은 이메일 형식입니다.</p>
                    <p style={{color: "black"}}>비밀번호</p>
                    <input className="password" name="password" placeholder='영문,숫자,특수문자 포함' type='password' onChange={this.passwordChange}/>
                    <div>
                        <input className='submitBtn' type='submit' value="확인" 
                        disabled={!this.state.isEmailOn||!this.state.isPWOn}/>
                    </div>   
                </form>
            </div>
          )
    }
}

export default Login;