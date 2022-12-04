import React from 'react';

const ConfirmButton = (props) => {
	const { onClickFinish } = props;

	const onClick = () => {
		onClickFinish();
	};

	return (
		<button type="button" onClick={onClick} className="confirm-button">
			Confirm
		</button>
	);
};

export default ConfirmButton;
