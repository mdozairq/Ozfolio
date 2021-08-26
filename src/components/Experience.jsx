import React from "react";
import Footer from "./Footer";

const Experience = () => {
	return (
		<>
			<div id="header" className="container">
				<h1 className="text-center brand-name">My Experiences</h1>
				<div className="my-5">
					<h2>Internity Foundation | 5th Jun to 21st July '21</h2>
					<h3>Data Structures and Algorithms Intern</h3>
					<ul>
						<li>
							<em>As part
							of the internship,successfully Done training and solved 100+ DSA
							problems and has been verified ongoing at various stages of development.</em>
						</li>
						<li>
							<a
								href="https://github.com/mdozairq/Internity-Foundation--DS-n-Algo-Internship"
								target="_blank"
								rel="noreferrer"
							>
								<em>Link to my DSA-internship Tasks Submission Repo</em>
							</a>
						</li>
					</ul>
				</div>
				<div className="my-5">
					<h2>CodeChef College Chapter Lead,| '19 to present</h2>
					<h3>Executive chef at GCE,Gaya Chapter</h3>
					<ul>
						<li>
							<em>I Organised the Coding Event and Sessions of Codechef in the Campus.</em>
						</li>
						</ul>
				</div>
				<div className="my-5">
					<h2>Google Developer Student Club | July '21 to present</h2>
					<h3>Flutter Lead at GDSC, Gaya</h3>
					<ul>
						<li>
							<em>Having Experience in conducting online Sessions and Promoting the new Technologies.</em>
						</li>
					</ul>
				</div>
				<Footer/>
			</div>
		</>
	);
};

export default Experience;