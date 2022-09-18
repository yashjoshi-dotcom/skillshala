import FooterSection from "./FooterSection";
import FooterHeading from "./FooterHeading";
import FooterItem from "./FooterItem";
import Instagram from "../../SVG/Instagram";
import Facebook from "../../SVG/Facebook";
import Twitter from "../../SVG/Twitter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Footer() {
	const noti = () => {
		toast("Subscribed Successfuly");
	};
	return (
		<div className="bg-footerbgcolor flex h-full w-full flex-col-reverse items-center justify-evenly   bg-gray-900 md:flex-row">
			<FooterSection extraClass="mt-12 hidden md:block">
				<FooterItem name="Privacy Policy" />
				<FooterItem name="Terms & Conditions" />
				<FooterItem name="About" link="/Aboutus" />
			</FooterSection>
			<ToastContainer />

			<FooterSection extraClass="flex md:flex-col justify-between before:invisible">
				<FooterHeading heading="Collegeshala" />

				<div className="flex flex-row items-center justify-evenly">
					<Instagram
						size="50"
						color="fill-highlight hover:fill-highlight_dark"
					/>
					<Facebook
						size="50"
						color="fill-highlight hover:fill-highlight_dark"
					/>
					<Twitter size="50" color="fill-highlight hover:fill-highlight_dark" />
				</div>

				<p className="text-l mb-0 text-white">Weekly Newsletter</p>
				<div className="flex h-10 flex-row items-center sm:px-20 md:w-full md:px-0 ">
					<input
						className="bg-input_bg border-highlight h-full w-2/3 rounded rounded-br-none rounded-tr-none border-2 border-r-0 p-4 text-black "
						type="text"
						placeholder="Name@Email.Com"
					></input>
					<button
						onClick={noti}
						className="bg-highlight border-highlight rounded-tl-non flex h-full w-1/3 items-center justify-center rounded rounded-bl-none border-2 bg-blue-700 text-white hover:bg-blue-800"
					>
						Subscribe
					</button>
				</div>
				<p className="text-textcolor1 text-l text-white">
					2022 Copyright | Designed by Forbidden-403
				</p>
			</FooterSection>

			<FooterSection extraClass="mt-12 hidden md:block">
				<FooterItem name="Become Partner" />
				<FooterItem name="Refund Policy" />
				<FooterItem name="Contact" link="/Contact" />
			</FooterSection>
		</div>
	);
}

export default Footer;
