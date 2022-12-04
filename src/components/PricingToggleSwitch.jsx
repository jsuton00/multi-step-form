import React from 'react';

const PricingToggleSwitch = (props) => {
	const { isYearly, onToggleYearly } = props;

	const onClick = () => {
		return onToggleYearly();
	};
	return (
		<>
			<span className="pricing-toggle-switch-monthly-label">Monthly</span>
			<div className="pricing-toggle-switch">
				<input
					name="pricing-toggle-switch"
					type="checkbox"
					className="pricing-toggle-switch-checkbox"
					onChange={onClick}
					value={isYearly}
				/>
				<label
					className="pricing-toggle-switch-label"
					name="pricing-toggle-switch"
				>
					<span className="pricing-toggle-switch-inner"></span>
					<span className="pricing-toggle-switch-switch"></span>
				</label>
			</div>
			<span className="pricing-toggle-switch-monthly-label">Yearly</span>
		</>
	);
};

export default PricingToggleSwitch;
