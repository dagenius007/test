import React from 'react';
import { InputHeader } from 'styled/commons';

const Input = ({
	label,
	type = 'text',
	required,
	name,
	handleChange,
	value,
	error,
	placeholder,
	topText,
	classes = 'input__container',
	min,
	max,
	style,
	id,
}) => {
	return (
		<div className={classes} style={style}>
			{topText && <InputHeader>{topText}</InputHeader>}
			{label && (
				<label>
					{label}
					{required && (
						<span className='error' style={{ marginLeft: '5px' }}>
							*
						</span>
					)}
				</label>
			)}

			<input
				type={type}
				placeholder={placeholder}
				name={name}
				onChange={handleChange}
				value={value}
				data-test-id='input'
				min={min}
				max={max}
				id={id}
			/>
			{error ? <p className='error'>{error}</p> : ''}
		</div>
	);
};

export default Input;
