import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

const AddOns = (props) => {
	const { setAddOnsList, addOns, nextStep, prevStep } = props;
	return (
		<div className="addons-form">
			<div className="addons-form-heading">
				<h2 className="addons-form-title">Pick add-ons</h2>
				<p className="addons-form-text">
					Add-ons help enhance your gaming experience.
				</p>
			</div>
			<div className="addons-form-checkbox-list">
				{addOns.length > 0 &&
					addOns.map((addOn) => {
						return (
							<div key={addOn.name} className="addons-form-checkbox-list-item">
								<div className="addons-form-checkbox">
									<input
										type="checkbox"
										className="addons-form-checkbox-input"
									/>
								</div>
								<div className="addons-form-checkbox-text">
									<p className="addons-form-checkbox-title">{addOn.name}</p>
									<p className="addons-form-checkbox-description">
										{addOn.description}
									</p>
								</div>
								<div className="addons-form-checkbox-price">
									<p>{`+$${addOn.monthly}/mo`}</p>
								</div>
							</div>
						);
					})}
			</div>
			<div className="select-plan-form-submit-section">
				<PreviousButton prevStep={prevStep} />
				<NextButton nextStep={nextStep} />
			</div>
		</div>
	);
};

export default AddOns;
