import Input from "../../Components/Input";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Service/apiUser";
import { useState } from "react";
import { useAuth } from "../../context/authContext";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { login: log } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
		log();
		navigate("/");
	};

	return (
		<div className="flex flex-col w-full h-full px-0 py-10 m-0 sm:px-12 sm:w-1/2">
			<div className="w-full mb-10">
				<h1 className="text-3xl font-bold text-center ">
					Lorem ipsum dolor, sit amet sit.{" "}
				</h1>
				<p className="my-5 text-center">
					Not registered yet?{" "}
					<Link to={"/signUp"} className="px-3 hover:underline text-cyan-500">
						SignUp
					</Link>
				</p>
			</div>
			<form
				className="flex flex-col w-full space-y-3 "
				onSubmit={(e) => handleSubmit(e)}
			>
				<Input
					placeholder="Enter your mail or username "
					type={"email"}
					label="Email: "
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type={"password"}
					label="Password: "
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="p-2 px-3 rounded shadow-sm">Login</button>
			</form>
		</div>
	);
}

export default Login;
