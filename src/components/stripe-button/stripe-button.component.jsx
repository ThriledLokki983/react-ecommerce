/** @format */

import React from "react";

import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
	console.log(token);
	alert("Payment successful");
};

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const pk =
		"pk_test_51J1MxLAGragk8kQBQts8wXVvgo4DbK0Als5zWelNUawzkq1bDRtYMaIXaJuWvHV3buaV8LVMqG7VUg7kQkETxW1c002LtJlKPe";

	return (
		<StripeCheckout
			label="Pay Now"
			name="ECOM Clothing Ltd"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={pk}
		/>
	);
};

export default StripeCheckoutButton;
