/** @format */

// eslint-disable-next-line

// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
	.collection("users")
	.doc("JoHNSV6q5e2SJlmHUhIL")
	.collection("cartItem")
	.doc("V2DpGM6t55V7lSsE5pJD");

firestore.doc("/users/JoHNSV6q5e2SJlmHUhIL/cartItem/V2DpGM6t55V7lSsE5pJD");
firestore.collection("/users/JoHNSV6q5e2SJlmHUhIL/cartItem");
