import { Contacts, Header} from "./ContactSection.styled";
import { ContactItem } from './ContactItem';
import propTypes from 'prop-types';

export const ContactForm = ({contacts, onDeleteContact}) => {
		return (
			<Contacts>
				<Header>
					<p>Name</p>
					<p>Phone</p>
					<p>Delete</p>
				</Header>
				{contacts.map((contact) => {
							const { id, name, number } = contact;
							return (
								<ContactItem
									id={id}
									key={id}
									name={name}
									number={number}
									onClick = {onDeleteContact}
								/>
							);
						})}
				</Contacts>
		)
}

Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteContact: propTypes.func,
};