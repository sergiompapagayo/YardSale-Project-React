import React from 'react';
import '@styles/SendEmail.scss';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div class="email-image">
          <svg width="90" height="58" viewBox="0 0 90 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M85.466 0H45.057H44.942H4.534C2.034 0 0 2.034 0 4.534V53.276C0 55.776 2.034 57.81 4.534 57.81H41.763H44.996H85.466C87.966 57.81 90 55.776 90 53.276V4.534C90 2.034 87.966 0 85.466 0ZM44.946 3.4H45.053H83.761L44.999 33.433L6.238 3.4H44.946ZM85.466 54.409C86.09 54.409 86.6 53.901 86.6 53.276V5.804L56.195 29.361L77.272 45.718L77.256 45.732C77.59 46.068 77.796 46.53 77.796 47.041C77.796 48.069 76.964 48.901 75.937 48.901C75.427 48.901 74.964 48.695 74.628 48.362L74.626 48.364L53.22 31.666L46.801 36.639C46.321 37.063 45.695 37.331 44.999 37.331C44.304 37.331 43.677 37.064 43.196 36.639L36.779 31.667L15.373 48.364L15.371 48.362C15.035 48.695 14.573 48.901 14.062 48.901C13.036 48.901 12.203 48.069 12.203 47.041C12.203 46.53 12.41 46.068 12.743 45.732L12.729 45.718L33.804 29.361L3.4 5.804V53.276C3.4 53.901 3.909 54.409 4.534 54.409H41.904H47.626H85.466Z" fill="white"/>
          </svg>
        </div>
				<button className="primary-button" id="login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;
