import React from 'react';
import '../styles/EditAccount.scss';

const EditAccount = () => {
	return (
		<div className="EditAccount">
			<div className="EditAccount-container">
				<h1 className="title">Edit My account</h1>
				<form action="/" className="EditAccount-form">
					<label htmlFor="edit-name" className="EditAccount-form__label">Name</label>
					<input type="text" id="edit-name" placeholder="Tu Nombre" className="EditAccount-form__input input__name"/>

					<label htmlFor="edit-email" className="EditAccount-form__label">Email addres</label>
					<input type="text" id="edit-email" placeholder="Tu Email" className="EditAccount-form__input input__email"/>

					<label htmlFor="edit-password" className="EditAccount-form__label">Password</label>
					<input type="text" id="edit-password" placeholder="Tu Contraseña" class="EditAccount-form__input input__password"/>
					<input type="submit" value="Guardar" className="primary-button"></input>
				</form>
			</div>
		</div>
	);
}

export default EditAccount;
