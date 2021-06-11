/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // higher order Component
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import "./header.styles.scss";

/**
 * Functional Component
 */

const Header = ({ currentUser, hidden }) => (
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
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

/**
 * Take the state and pulls off the currentUser and returns it.
 * @param {state | Object} || This is the top level reducer
 * @returns {Object} || The currentUser object
 */
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
