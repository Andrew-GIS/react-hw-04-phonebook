import styled from 'styled-components';

export const PhoneForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid blue;
padding: ${p => `${p.theme.space[4]}px`};
margin: 0 auto 0 auto;
width: 30%;
background-color: ${p => `${p.theme.colors.wheat}`} ;
`;

export const NameLable = styled.label`
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: ${p => `${p.theme.fontSizes.m}`};
padding: ${p => `${p.theme.space[2]}px`};
// border: 1px solid black;
width: 80%;
`;

export const PhoneInput = styled.input`
width: 70%;
margin-left: ${p => `${p.theme.space[4]}px`};
`;

export const AddButton = styled.button`
padding: ${p => `${p.theme.space[2]}px`};
margin-top: ${p => `${p.theme.space[4]}px`};
width: 30%;
min-width: 70px;
background-color: ${p => `${p.theme.colors.secondary}`};
border-radius: 5px;
:hover {
	background-color: ${p => `${p.theme.colors.accent}`} ;
}`;