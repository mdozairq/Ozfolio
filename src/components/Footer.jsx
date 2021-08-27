import React from "react";

const Footer = () => {
	return (
		<footer className="container">
			<a
				href="https://www.linkedin.com/in/md-ozair-qayam-6265b9178/"
				target="_blank"
				rel="noreferrer"
			>
				<i className="icons fab fa-linkedin fa-2x"></i>
			</a>
			<a href="https://github.com/mdozairq" target="_blank" rel="noreferrer">
				<i className="icons fab fa-github fa-2x"></i>
			</a>
			<a href="mailto:mdozairq@gmail.com" target="_blank" rel="noreferrer">
				<i className="icons fas fa-envelope fa-2x"></i>
			</a>
			<a href="tel:+918873583561" target="_blank" rel="noreferrer">
				<i className="icons fas fa-phone-square-alt fa-2x"></i>
			</a>
            <hr/>
            <p className="text-center pb-3">Made with ❤️ By Me.</p>
		</footer>
	);
};

export default Footer;