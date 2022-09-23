import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">Create My account</h1>
				<form action="/" className="CreateAccount-form">
					<label htmlFor="edit-name" className="CreateAccount-form__label">Name</label>
					<input type="text" id="edit-name" placeholder="Tu Nombre" className="CreateAccount-form__input input__name"/>

					<label htmlFor="edit-email" className="CreateAccount-form__label">Email addres</label>
					<input type="text" id="edit-email" placeholder="Tu Email" className="CreateAccount-form__input input__email"/>

					<label htmlFor="edit-password" className="CreateAccount-form__label">Password</label>
					<input type="text" id="edit-password" placeholder="Tu Contraseña" class="CreateAccount-form__input input__password"/>
					<input type="submit" value="Sign up" className="primary-button" id="signup-button"></input>
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
