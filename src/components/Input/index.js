import React from 'react';
import { any, bool, func, number, string } from 'prop-types';
import { Wrapper, Alert } from './styled.js';

const Input = ({
	onChange,
	error,
	value,
	placeholder,
	name,
	errormessage,
	onBlur,
	type,
	...rest
}) => {
	const attributes = {
		onChange,
		error,
		value,
		placeholder,
		name,
		errormessage,
		onBlur,
		type,
	};
	return (
		<Wrapper {...rest}>
			<input {...attributes} className={`input ${(errormessage !== undefined && error) ? 'error' : ''}`} />
			{error && <Alert>{errormessage}</Alert>}
		</Wrapper>
	);
};

Input.propTypes = {
	onChange: func,
	errorMessage: string,
	value: any,
	placeholder: string,
	name: string,
	type: string,
	error: number,
};

Input.defaultProps = {
	type: 'text',
};

export default Input;

// import React from 'react';
// import { any, bool, func, number, string } from 'prop-types';
// import { Wrapper, Alert } from './styled.js';

// const Input = ({
// 	onKeyDown,
// 	onChange,
// 	error,
// 	value,
// 	placeholder,
// 	autoFocus,
// 	disabled,
// 	name,
// 	errormessage,
// 	maxLength,
// 	onBlur,
// 	type,
// 	...rest
// }) => {
// 	const attributes = {
// 		onKeyDown,
// 		onChange,
// 		error,
// 		value,
// 		disabled,
// 		placeholder,
// 		autoFocus,
// 		name,
// 		errormessage,
// 		maxLength,
// 		onBlur,
// 		type,
// 	};
// 	return (
// 		<Wrapper {...rest}>
// 			<input {...attributes} className={`input ${(errormessage != undefined && error) ? 'error' : ''}`} />
// 			{error && <Alert>{errormessage}</Alert>}
// 		</Wrapper>
// 	);
// };

// Input.propTypes = {
// 	onChange: func,
// 	errorMessage: string,
// 	value: any,
// 	disabled: bool,
// 	placeholder: string,
// 	name: string,
// 	type: string,
// 	maxLength: number,
// 	autoFocus: bool,
// 	error: number,
// };

// Input.defaultProps = {
// 	type: 'text',
// };

// export default Input;