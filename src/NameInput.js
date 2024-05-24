import React from "react";

const NameInput = ({ register, errors }) => {
	return (
		<>
			<div className="container name">
				<div className="inputs">
					<label htmlFor="fname">
						First Name <span className="required">*</span>
					</label>
					<input
						type="text"
						id="fname"
						{...register("firstName")}
						className={errors.firstName?.message && "error-input"}
					/>
					<p className="errors">{errors.firstName?.message}</p>
				</div>
				<div className="inputs">
					<label htmlFor="lname">
						Last Name <span className="required">*</span>
					</label>
					<input
						type="text"
						id="lname"
						{...register("lastName")}
						className={errors.lastName?.message && "error-input"}
					/>
					<p className="errors lname">{errors.lastName?.message}</p>
				</div>
			</div>
		</>
	);
};

export default NameInput;
