import {PhoneForm, NameLable, PhoneInput, AddButton } from './PhoneForm.styled';
import { useState } from 'react';
import { nanoid } from "nanoid";

export function PhoneSection ({onSubmit}){
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const inputId = nanoid();
	
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (name === "name") {
			setName(value);
			return;
		}
		else if (name === "number") {
			setNumber(value);
			return;
		}
		else {
			alert("An Error in your Application");
			return;
		}
	}

	const handleSubmit = event => {
		event.preventDefault();
		onSubmit({name: name, number: number});
		reset();
	}

	const reset = () => {
		setName('');
		setNumber('');
	}

		return(
		(
			<PhoneForm onSubmit={handleSubmit} autoComplete="off">
					<NameLable htmlFor={name} >
						Name
						<PhoneInput
							type="text"
							name="name"
  							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							required
							id={inputId}
							value={name}
							onChange={handleInputChange}>
						</PhoneInput>
					</NameLable>
					<NameLable htmlFor={number} >
						Phone
						<PhoneInput
							type="tel"
							name="number"
  							 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  							title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
							required
							id={inputId}
							value={number}
							onChange={handleInputChange}>
						</PhoneInput>
					</NameLable>
				<AddButton type='submit'>Add Contact</AddButton>
			</PhoneForm>
			)
		)
	
}