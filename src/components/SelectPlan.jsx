import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import PricingToggleSwitch from './PricingToggleSwitch';

const SelectPlan = (props) => {
	const { setPlansList, plans, nextStep, prevStep, onToggleYearly, isYearly } =
		props;
	return (
		<div className="select-plan-form">
			<div className="select-plan-form-heading">
				<h2 className="select-plan-form-title">Select your plan</h2>
				<p className="select-plan-form-text">
					You have the option of monthly or yearly billing.
				</p>
			</div>
			<div className="select-plan-cards-section">
				{plans.length > 0 &&
					plans.map((plan) => {
						return (
							<div key={plan.name} className="select-plan-card card">
								<div className="select-plan-card-img card-img-top">
									<img src={plan.icon} alt={plan.name} />
								</div>
								<div className="select-plan-card-body card-body">
									<h5 className="select-plan-name card-title">{plan.name}</h5>
									<p className="select-plan-price card-text">{`$${plan.monthly}/mo`}</p>
								</div>
							</div>
						);
					})}
			</div>
			<div className="select-plan-form-toggle-section">
				<PricingToggleSwitch
					onToggleYearly={onToggleYearly}
					isYearly={isYearly}
				/>
			</div>
			<div className="select-plan-form-submit-section">
				<PreviousButton prevStep={prevStep} />
				<NextButton nextStep={nextStep} />
			</div>
		</div>
	);
};

export default SelectPlan;
