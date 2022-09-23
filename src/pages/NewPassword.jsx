import React from 'react';
import '@styles/NewPassword.scss';

const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for your account</p>
				<form action="/" class="NewPassword-form">
					<div>
						<input id="password" type="password" class="NewPassword-form__input" placeholder=" " />
						<label htmlFor="password" class="NewPassword-form__label">Write your new Password</label>
						<span className="NewPassword-form__line"></span>
					</div>
					<div>
						<input id="new-password" type="password" class="NewPassword-form__input" placeholder=" " />
						<label htmlFor="new-password" class="NewPassword-form__label">Write your new Password Again</label>
						<span className="NewPassword-form__line"></span>
					</div>
					<button type="button" className="primary-button" id="confirm-button">
					Confirm
					</button>
          </form>
			</div>
		</div>
	);
}

export default NewPassword;
