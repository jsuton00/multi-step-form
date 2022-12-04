import React from 'react';
import NextButton from './NextButton';

const PersonalInfo = (props) => {
	const { values, setPersonalInfo, nextStep } = props;

	const onChange = (e) => {
		e.persist();
		setPersonalInfo({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div className="personal-info-form">
			<div className="personal-info-form-heading">
				<h2 className="personal-info-form-title">Personal Info</h2>
				<p className="personal-info-form-text">
					Please provide your name, email address and phone number.
				</p>
			</div>
			<div className="personal-info-form-input-section">
				<label htmlFor="name" className="personal-info-form-label">
					Name
				</label>
				<input
					type="text"
					name="name"
					placeholder="e.g. Stephen King"
					className="personal-info-form-input"
					onChange={onChange}
					value={values.name}
				/>
			</div>
			<div className="personal-info-form-input-section">
				<label htmlFor="email" className="personal-info-form-label">
					Email Address
				</label>
				<input
					type="text"
					name="email"
					placeholder="e.g. stephenking@lorem.com"
					className="personal-info-form-input"
					onChange={onChange}
					value={values.email}
				/>
			</div>
			<div className="personal-info-form-input-section">
				<label htmlFor="phoneNumber" className="personal-info-form-label">
					Phone Number
				</label>
				<input
					type="text"
					name="phoneNumber"
					placeholder="e.g. +1 234 567 890"
					className="personal-info-form-input"
					onChange={onChange}
					value={values.phoneNumber}
				/>
			</div>
			<div className="personal-info-form-submit-section">
				<NextButton nextStep={nextStep} />
			</div>
		</div>
	);
};

export default PersonalInfo;
