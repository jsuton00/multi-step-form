import React, { useRef } from 'react';
import { STEPS } from '../constants/steps';

const StepNavMenu = (props) => {
	const { activeStep } = props;
	const stepNavItemRef = useRef();

	return (
		<div className="step-nav-menu">
			{STEPS.length > 0 &&
				STEPS.map((step) => {
					return (
						<div
							key={step.id}
							ref={stepNavItemRef}
							className={`step-nav-menu-item ${
								activeStep === step.id ? 'step-nav-menu-item-active' : ''
							}`}
						>
							<div className="step-nav-menu-item-number">{step.id}</div>
							<div className="step-nav-menu-item-text">
								<p className="step-nav-menu-item-subtitle">{`step ${step.id}`}</p>
								<p className="step-nav-menu-item-title">{step.title}</p>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default StepNavMenu;
