/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // higher order Component
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

/**
 * Functional Component
 */

const Header = ({ currentUser }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link to="/signin">SIGN IN</Link>
			)}
		</div>
	</div>
);

/**
 * Take the state and pulls off the currentUser and returns it.
 * @param {state | Object} || This is the top level reducer
 * @returns {Object} || The currentUser object
 */
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
