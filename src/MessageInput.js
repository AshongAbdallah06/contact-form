import React from "react";

const MessageInput = ({ register, errors }) => {
	return (
		<div className="container">
			<div className="inputs">
				<label>
					Message <span className="required">*</span>
				</label>
				<textarea
					type="text"
					className={`message ${errors.message?.message ? "error-input" : ""}`}
					{...register("message")}
				></textarea>
				<p className="errors">{errors.message?.message}</p>
			</div>
		</div>
	);
};

export default MessageInput;
