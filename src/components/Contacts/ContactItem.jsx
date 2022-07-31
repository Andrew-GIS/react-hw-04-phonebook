import { Contact, DeleteButton } from "./ContactSection.styled";

export const ContactItem = ({ id, name, number, onClick }) => {
	return (
		<Contact>
			<p>{name}</p>
			<p>{number}</p>
			<DeleteButton type="button" id={id} onClick={() => onClick(id)}>Delete</DeleteButton>
		</Contact>
	);
}