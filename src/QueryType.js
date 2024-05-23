import React from "react";

const QueryType = ({ queryType, setQueryType, clicked }) => {
	return (
		<div className="query-type">
			<label htmlFor="">
				Query Type <span className="required">*</span>
			</label>
			<div className="inputs-container">
				<div
					className={`inputs ${queryType === "gn" ? "focused" : ""}`}
					onClick={() => setQueryType("gn")}
				>
					<input
						type="radio"
						name="query-type"
						onChange={() => setQueryType("gn")}
						checked={queryType === "gn" && true}
					/>
					<span>General Enquiry</span>
				</div>

				<div
					className={`inputs ${queryType === "sp" ? "focused" : ""}`}
					onClick={() => setQueryType("sp")}
				>
					<input
						type="radio"
						name="query-type"
						onChange={() => setQueryType("sp")}
						checked={queryType === "sp" && true}
					/>
					<span>Support Request</span>
				</div>
			</div>
			{queryType === "" && clicked && <p className="errors">Please select a query type</p>}
		</div>
	);
};

export default QueryType;
