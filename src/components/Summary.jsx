import React from 'react';
import ConfirmButton from './ConfirmButton';
import PreviousButton from './PreviousButton';
import ThankYou from './ThankYou';

const Summary = (props) => {
	const { prevStep, isFinished, onClickFinish } = props;
	return (
		<>
			{isFinished ? (
				<ThankYou />
			) : (
				<div className="summary">
					<div className="summary-heading">
						<h2 className="summary-title">Finishing up</h2>
						<p className="summary-text">
							Double check to see that everything looks good before submitting.
						</p>
					</div>
					<div className="summary-list"></div>
					<div className="summary-submit-section">
						<PreviousButton prevStep={prevStep} />
						<ConfirmButton onClickFinish={onClickFinish} />
					</div>
				</div>
			)}
		</>
	);
};

export default Summary;
