import { useForm } from "react-hook-form";
import "./App.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Succes from "./Succes";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import QueryType from "./QueryType";
import MessageInput from "./MessageInput";
import Consent from "./Consent";

function App() {
	const schema = yup.object().shape({
		firstName: yup
			.string()
			.required("This field is required")
			.matches(/[A-Za-z0-9]{3,}/, "Please enter a valid first name"),
		lastName: yup
			.string()
			.required("This field is required")
			.matches(/[A-Za-z0-9]{3,}/, "Please enter a valid last name"),
		email: yup
			.string()
			.email("Please enter a valid email address")
			.required("Please enter a valid email address"),
		message: yup.string().required("This field is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		// Prevent Default Behaviour
		if (queryType !== "" && consent) {
			setSuccess(true);
			setTimeout(() => {
				setSuccess(false);
			}, 2000);
		}
	};

	const [queryType, setQueryType] = useState("");
	const [consent, setConsent] = useState(false);
	const [success, setSuccess] = useState(false);
	const [clicked, setClicked] = useState(false);

	return (
		<div className="App">
			<Succes success={success} />

			<form
				className="overall"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1>Contact Us</h1>

				<NameInput
					register={register}
					errors={errors}
				/>

				<EmailInput
					register={register}
					errors={errors}
				/>

				<QueryType
					queryType={queryType}
					setQueryType={setQueryType}
					clicked={clicked}
				/>

				<MessageInput
					register={register}
					errors={errors}
				/>

				<Consent
					clicked={clicked}
					consent={consent}
					setConsent={setConsent}
				/>

				<button onClick={() => setClicked(true)}>Submit</button>
			</form>
		</div>
	);
}

export default App;
