import React from "react";
import Footer from "./Footer";

const Education = () => {
	return (
		<>
			<section id="header" className="display-flex align-items-center">
			<div>
				<h1 className="text-center brand-name">Education</h1>
			</div>
			<div className="container">
				<div className="my-5">
					<h1>Undergraduate | 2019-present </h1>
					<h3>Gaya College of Engineering, Gaya | 8.0 CGPA</h3>
					<h5>B.Tech | Computer Science Engineering</h5>
					<ul>
						<li>
							<em>Working member of TPO: worked for approaching the tech Companies for the Training and Placement at Campus</em>
						</li>
						<li>
							<em>Founder and Secratery of SPARK-GCE Student Association to promote Art and Culture at the Campus</em>
						</li>
						<li>
							<em>Take part in Annual Sport competition</em>
						</li>
					</ul>
				</div>
				<div className="my-5">
					<h1>Intermediate | 2016-2018 </h1>
					<h3>St. Joseph's School, Bhagalpur | 80.50 %</h3>
					<h5>12th | ISC | Physics, Chemistry, Maths and Computer Science</h5>
					<ul>
						<li>
						<em>Took Active Part in Cultural and Art Activities.</em>
						</li>
						<li>
							<em>Took Part in Decalmation competition</em>
						</li>
					</ul>
				</div>
				<div className="my-5">
					<h1>Matriculation | 2004-2016 </h1>
					<h3>ST. Teresa's School, Bhagalpur | 87.00%</h3>
					<h5>10th | ICSE | English, Social Science, Science and Hindi with Computer Applications</h5>
					<ul>
						<li>
							<em>perform in various Drama, Dance and Other Culural Programme.</em>
						</li>
						<li>
							<em>volunteered to organize the Silver Jubilee Fest (25th anniversary)
								of the school.</em>
						</li>
					</ul>
				</div>
			</div>
			<Footer/>
		</section>
        </>
    );
};

export default Education;

