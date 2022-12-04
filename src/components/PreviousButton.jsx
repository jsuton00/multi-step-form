import React from 'react';

const PreviousButton = (props) => {
	const { prevStep } = props;

	const onClick = (e) => {
		e.preventDefault();
		prevStep();
	};
	return (
		<button type="button" onClick={onClick} className="previous-button">
			Go Back
		</button>
	);
};

export default PreviousButton;
