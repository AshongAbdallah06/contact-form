import React from "react";

const EmailInput = ({ register, errors }) => {
	return (
		<div className="container">
			<div className="inputs">
				<label htmlFor="email">
					Email Address <span className="required">*</span>
				</label>
				<input
					type="text"
					id="email"
					{...register("email")}
					className={errors.email?.message && "error-input"}
				/>
				<p className="errors">{errors.email?.message}</p>
			</div>
		</div>
	);
};

export default EmailInput;
