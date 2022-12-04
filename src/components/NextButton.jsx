import React from 'react';

const NextButton = (props) => {
	const { nextStep } = props;

	const onClick = (e) => {
		e.preventDefault();
		nextStep();
	};
	return (
		<button type="button" onClick={onClick} className="next-button">
			Next Step
		</button>
	);
};

export default NextButton;
