import { Instagram, Mail } from "lucide-react";
import Logo from "./Logo";

function Footer() {
	return (
		<div className="flex items-center justify-around px-10 mt-20 border-t-[1px] border-stone-800 h-80">
			<div className="flex flex-col items-start space-y-2">
				<Logo />
				<p className="py-3 text-sm font-semibold ">
					Enjoy the biggest sale of your life
				</p>
				<div className="flex space-x-5">
					<span className="text-gray-500 hover:text-stone-800">
						<a
							href="https://www.instagram.com/_official_groomify?igsh=MWQzeHVmdXg1aDBiZg%3D%3D&utm_source=qr "
							target="_blank"
						>
							<Instagram size={36} />
						</a>
					</span>
					<span className="text-gray-500 hover:text-stone-800">
						<a href="mailto:groomify2024@gmail.com">
							<Mail size={40} />
						</a>
					</span>
				</div>
			</div>
			<div className="flex flex-col space-y-2">
				<h1 className="my-2 text-xl font-semibold">About</h1>
				<p>About us</p>
				<p>Customer support</p>
				<p>Support Center</p>
			</div>
			<div className="flex flex-col space-y-2">
				<h1 className="my-2 text-xl font-semibold">Our services</h1>
				<p>shop</p>
				<p>Discounts</p>
				<p> Shipping made</p>
			</div>
			<div className="flex flex-col space-y-2">
				<h1 className="my-2 text-xl font-semibold">Our Company</h1>
				<p>About us</p>
				<p>Contact Us</p>
				<p>About us </p>
			</div>
		</div>
	);
}

export default Footer;
