import React from 'react'
import Ad from "./Ad.jsx"

class AdPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {isAdOn: true};

        this.btnClick = this.btnClick.bind(this);
    }
    
    btnClick(){
        this.setState(preState => ({
            isAdOn: !preState.isAdOn
        }));
        
    }

    render(){
        return (
            <div>
                <Ad state={this.state.isAdOn}/>
                <button onClick={this.btnClick}>
                {this.state.isAdOn ? '광고 안보기' : '광고 보기'}
                </button>                
            </div>
          );
    }
}
export default AdPage;
