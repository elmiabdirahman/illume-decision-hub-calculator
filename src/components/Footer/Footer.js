import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Footer.css';

export default function Footer() {

  const date = new Date().getFullYear();
  const history = useHistory();
  const userData = useSelector(state => state.user.admin);

  // Push history to user profile
  const pushToHome = () => {
    if(userData === true){
      history.push('/admin');
    }
    else{
      history.push('/new-user');
    }
  }

  return(
    <>
      <div className="whitespace"></div>
      <footer className="footer-main-container">
        <img className="footer-logo" src="illume-logo180.png" alt="illume logo" onClick={pushToHome} />
        <span className="footer-brand-name">illume decision hub</span>
        <div className="footer-span-container">
          <span className="footer-a-span">
            &copy; {date} &nbsp;
            <a className="footer-a" href="https://illume-pricing.com/">Illume Pricing</a>
          </span>
        </div>
      </footer>
    </>
  );
}