import React from "react";

const Consent = ({ consent, clicked, setConsent }) => {
	return (
		<div className="consent">
			<div>
				<input
					type="checkbox"
					onChange={() => setConsent(!consent)}
				/>
				<span className="text">
					I consent to being contacted by the team <span className="required">*</span>
				</span>
			</div>
			{!consent && clicked && (
				<p className="errors">To submit this form, please consent to being contacted</p>
			)}
		</div>
	);
};

export default Consent;
