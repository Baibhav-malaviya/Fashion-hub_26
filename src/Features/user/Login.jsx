import Input from "../../Components/Input";
import WaveLoader from "../../Components/WaveLoader";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Service/apiUser";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { addUser } from "../../Cache/cacheUser";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [incorrectPassword, setIncorrectPassword] = useState(false);
	const [notRegistered, setNotRegistered] = useState(false);
	const [loging, setLogging] = useState(false);
	const navigate = useNavigate();
	const { login: log } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLogging(true);
		setNotRegistered(false);
		setIncorrectPassword(false);
		const currentUser = await login(email, password);

		if (currentUser.message == "password is not matched with above data") {
			setIncorrectPassword(true);
			setLogging(false);
			return;
		}
		if (currentUser.message == "User with this data is not found") {
			setNotRegistered(true);
			setLogging(false);
			return;
		}

		await addUser(currentUser);
		log();
		setLogging(false);
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
				<div>
					<Input
						placeholder="Enter your mail or username "
						type={"email"}
						label="Email: "
						value={email}
						required
						onChange={(e) => {
							setEmail(e.target.value);
							setNotRegistered(false);
						}}
					/>
					{notRegistered && (
						<div className="pr-2 my-2 text-xs font-semibold text-yellow-500 bg-yellow-100 text-end">
							**Email not registered
						</div>
					)}
				</div>
				<div>
					<Input
						type={"password"}
						label="Password: "
						placeholder="Enter your password"
						required
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
							setIncorrectPassword(false);
						}}
					/>
					{incorrectPassword && (
						<div className="pr-2 my-2 text-xs font-semibold text-red-500 bg-red-200 text-end">
							**Incorrect password
						</div>
					)}
				</div>
				<button className="p-2 px-3 font-semibold bg-gray-200 rounded shadow-sm">
					{loging ? <WaveLoader /> : "Login"}
				</button>
			</form>
		</div>
	);
}

export default Login;
