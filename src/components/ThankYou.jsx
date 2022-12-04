import React from 'react';
import thankyou from '../assets/images/icon-thank-you.svg';

const ThankYou = () => {
	return (
		<div className="thank-you">
			<div className="thank-you-message">
				<div className="thank-you-image">
					<img src={thankyou} alt="Thank you" className="thank-you-image" />
				</div>
				<h2 className="thank-you-title">Thank you!</h2>
				<p className="thank-you-description">
					Thanks for confirming your subscription! We hope you will have fun
					using our platform. If you ever need support, please feel free to
					email us at support@loremgaming.com.
				</p>
			</div>
		</div>
	);
};

export default ThankYou;
