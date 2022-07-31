import styled from 'styled-components';

export const ContactHead = styled.h2`
padding-left: ${p => `${p.theme.space[4]}px`};`;

export const Contacts = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
//border: 1px solid blue;
padding: ${p => `${p.theme.space[4]}px`};
margin: 0 auto 0 auto;
width: 30%;
//background-color: ${p => `${p.theme.colors.wheat}`} ;
`;

export const Header = styled.li`
display: flex;
justify-content: space-between;
flex-direction: row;
min-width: 200px;
width: 100%;
border: solid 1px red;
padding: ${p => `${p.theme.space[4]}px`};
background-color: ${p => `${p.theme.colors.accent}`};
`;

export const Contact = styled.li`
display: inline-flex;
justify-content: space-between;
border: solid 1px red;
min-width: 200px;
width: 100%;
padding: ${p => `${p.theme.space[4]}px`};
`;

export const DeleteButton = styled.button`
	padding: ${p => `${p.theme.space[2]}px`};
	border: ${p => p.theme.borders.normal};
	font-size: ${p => p.theme.fontSizes.m};
	border-radius: 5px;
	background-color: ${p => `${p.theme.colors.secondary}`};
	:hover {
		background-color: ${p => `${p.theme.colors.accent}`} ;
	}
`;