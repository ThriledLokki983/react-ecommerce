/** @format */

import React from "react";
import MenuItem from "../menu_item/menu_item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "hats",
					imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
					id: 13,
					linkUrl: "hats",
				},
				{
					title: "jackets",
					imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
					id: 32,
					linkUrl: "jackets",
				},
				{
					title: "sneakers",
					imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
					id: 33,
					linkUrl: "sneakers",
				},
				{
					title: "womens",
					imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
					size: "large",
					id: 34,
					linkUrl: "womens",
				},
				{
					title: "mens",
					imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
					size: "large",
					id: 53,
					linkUrl: "mens",
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
