import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
const Serverlogin = () => {
	return (
		<div>
			<div className="signin-wrapper">
				<div className="signin-inner server">
					<div className="signin-form-wrapper ">
						<Link to="">
							<img src={logo} alt="" />
						</Link>
						<h2 className="lead-text">Sign up</h2>
						<p className="small-text">Welcome back, you’ve been missed!</p>

						<form action="">
							<div className="mb-3">
								<label className="form-label">Email Address</label>
								<div className="icon-input">
									<input
										type="email"
										className="form-control"
										placeholder="Enter Email"
									/>
									<i className="fa-solid fa-envelope"></i>
								</div>
							</div>
							<div className="mb-3">
								<label className="form-label">Password</label>
								<div className="icon-input">
									<input
										type="password"
										className="form-control"
										placeholder="Enter password"
									/>
									<i className="fa-solid fa-lock"></i>
								</div>
							</div>
							<div className="d-grid gap-2">
								<button className="btn">Sign up</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Serverlogin;
