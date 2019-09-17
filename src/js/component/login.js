import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import SignUp from "../component/signup.js";
import { Navbar } from "../component/navbar";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	onChangeEmail = e => this.setState({ email: e.target.value });
	onChangePassword = e => this.setState({ password: e.target.value });

	render() {
		return (
			<React.Fragment>
				<div className="login">
					<div className="form-group">
						<label className="exampleInputEmail1">Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							onChange={this.onChangeEmail}
						/>
						<small id="emailHelp" className="form-text text-muted">
							We will never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label className="exampleInputPassword1">Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
							onChange={this.onChangePassword}
						/>
					</div>
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<Link to="/profile/<int:user_id>">
									<button
										type="submit"
										className="btn btn-primary"
										onClick={() => actions.onLogin(this.state.email, this.state.password)}>
										{"Login"}
									</button>
								</Link>
							);
						}}
					</Context.Consumer>
					<Link to="/">
						<a href="#"> home</a>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}
