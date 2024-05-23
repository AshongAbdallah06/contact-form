import React from "react";

const Succes = ({ success }) => {
	return (
		<div className={`success ${success && "show"}`}>
			Message Sent!
			<p>Thanks for completing the form. We'll be in tough soon!</p>
		</div>
	);
};

export default Succes;
