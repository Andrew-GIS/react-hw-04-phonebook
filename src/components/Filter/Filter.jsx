import { FilterForm, FilterLable, FilterInput } from './Filter.styled';
import propTypes from 'prop-types';

export const FilterSection = ({ title, value, onChange }) => {
	return (
		<FilterForm autoComplete="off">
			<FilterLable htmlFor='filter'>
				{title}
				<FilterInput
					type="text"
					name='filter'
					value={value}
					onChange={onChange}
					/>
			</FilterLable>
		</FilterForm>
	);
};

FilterSection.prototype = {
      title: propTypes.string,
      value: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
};