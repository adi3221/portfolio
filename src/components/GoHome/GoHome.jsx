import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import homeIconWhite from './../../assets/home_white.png'
import homeIconBlack from './../../assets/home_black.png'
import './GoHome.css'

// this component is there only to teach to programmmatic navigation
class GoHome extends Component {
    navigateToHome=()=>{
        const {history} = this.props;
        history.push('/');
    };
  render() {
      const{location} = this.props;
      const whiteBtn = location.pathname ==='/';
    return (
      <button onClick={this.navigateToHome} className={`go-home-btn ${whiteBtn?'white-bkg':'gradient-bkg'}`}>
          <img className='home-icon'
          src={whiteBtn ? homeIconBlack : homeIconWhite}
          alt="home-icon"/>
      </button>
    )
  }
}
export default withRouter(GoHome);
