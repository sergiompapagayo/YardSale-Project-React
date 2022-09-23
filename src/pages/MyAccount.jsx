import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="MyAccount-container__title">My account</h1>
				<div className="MyAccount-form">
					<label htmlFor="MyAccount-name" className="MyAccount-form__label">Name</label>
					<p id="MyAccount-name" className="MyAccount-form__value value__name">Sergio Medina Papagayo</p>

					<label htmlFor="MyAccount-email" className="MyAccount-form__label">Email addres</label>
					<p id="MyAccount-email" className="MyAccount-form__value value__email">sergio.m.papagayo@gmail.com</p>

					<label htmlFor="MyAccount-password" className="MyAccount-form__label">Password</label>
					<p id="MyAccount-password" className="MyAccount-form__value value__password">********</p>
				</div>
				<button className="primary-button" id="edit-button">Edit</button>
				<button className="secondary-button">Ir a Home </button>
			</div>
		</div>
	);
}

export default MyAccount;
