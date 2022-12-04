import React, { useState } from 'react';
import AddOns from '../components/AddOns';
import PersonalInfo from '../components/PersonalInfo';
import SelectPlan from '../components/SelectPlan';
import StepNavMenu from '../components/StepNavMenu';
import Summary from '../components/Summary';
import { addOns, plans } from '../constants/data';

const FormContainer = (props) => {
	const [step, setStep] = useState(1);
	const [personalInfo, setPersonalInfo] = useState({
		name: '',
		email: '',
		phoneNumber: '',
	});
	const [plansList, setPlansList] = useState(plans);
	const [addOnsList, setAddOnsList] = useState(addOns);
	const [summary, setSummary] = useState({ plan: '', addOn: '', total: 0 });
	const [isFinished, setIsFinished] = useState(false);
	const [isYearly, setIsYearly] = useState(false);

	const prevStep = () => {
		setStep(step > 1 ? step - 1 : 1);
	};

	const nextStep = () => {
		setStep(step + 1);
	};

	const onClickFinish = () => {
		setIsFinished(true);
	};

	const onToggleYearly = () => setIsYearly(!isYearly);

	const renderFormSection = (step) => {
		switch (step) {
			case 1:
				return (
					<PersonalInfo
						nextStep={nextStep}
						setPersonalInfo={setPersonalInfo}
						values={{
							name: personalInfo.name,
							email: personalInfo.email,
							phoneNumber: personalInfo.phoneNumber,
						}}
					/>
				);
			case 2:
				return (
					<SelectPlan
						prevStep={prevStep}
						nextStep={nextStep}
						setPlansList={setPlansList}
						plans={plansList}
						onToggleYearly={onToggleYearly}
						isYearly={isYearly}
					/>
				);
			case 3:
				return (
					<AddOns
						prevStep={prevStep}
						nextStep={nextStep}
						setAddOnsList={setAddOnsList}
						addOns={addOnsList}
					/>
				);
			case 4:
				return (
					<Summary
						summary={summary}
						prevStep={prevStep}
						isFinished={isFinished}
						onClickFinish={onClickFinish}
					/>
				);
			default:
				return;
		}
	};
	return (
		<div className="form-container container">
			<div className="form-container-row">
				<div className="form-container-nav-section">
					<StepNavMenu activeStep={step} />
				</div>
				<div className="form-container-input-section">
					{renderFormSection(step)}
				</div>
			</div>
		</div>
	);
};

export default FormContainer;
