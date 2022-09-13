import React from "react";
import Footer from "./Footer";

const Experience = () => {
	return (
		<>
			<div id="header" className="container">
				<h1 className="text-center brand-name">My Experiences</h1>
				<div className="my-5">
					<h2>Treflo, (Ardour Labs Private Limited),| Apr '22 – Sept '22 (Bengaluru, IN)</h2>
					<h3>Junior Software Developer - Internship</h3>
					<ul>
						<li>
							<em>Worked on Microservices architecture.</em>
						</li>
						<li>
							<em>Developed RESTful APIs in ExpressJS along with NodeJS Framework in back-end development using TypeScript.</em>
						</li>
						<li>
							<em>Written Migration in mongoDB using migrate-mongo library.</em>
						</li>
						<li>
							<em>hands-on experience in devops, created kubernetes cluster and deployed the services.</em>
						</li>
					</ul>
				</div>
				<div className="my-5">
					<h2>NamaSYS, (Nemesis Consultants LLP) | Oct '21 to Jan '22</h2>
					<h3>ReactJS Developer Intern</h3>
					<ul>
						<li>
							<em>Developed different components of the main website using React from scratch</em>
						</li>
						<li>
							<em>Implemented the logic for the interaction between the components and their respective state management with
								Redux and useContext hooks</em>
						</li>
						<li>
							<em>Developed the logic to fetch REST APIs and implement them in the code in an efficient manner</em>
						</li>
					</ul>
				</div>
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
				<Footer />
			</div>
		</>
	);
};

export default Experience;