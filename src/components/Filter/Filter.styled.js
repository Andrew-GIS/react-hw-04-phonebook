import styled from "styled-components";

export const FilterForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: ${p => `${p.theme.space[4]}px`};
margin: 0 auto 0 auto;
width: 30%;
border: 1px solid blue;
background-color: ${p => `${p.theme.colors.wheat}`} ;
`;

export const FilterLable = styled.label`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: ${p => `${p.theme.space[4]}px`};
width: 80%;
`;

export const FilterInput = styled.input`
	width: 70%;
`;