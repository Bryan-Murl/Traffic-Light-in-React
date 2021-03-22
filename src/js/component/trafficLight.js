import React from "react";

//create your first component
export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickLight: null
		};
	}

	render() {
		let redExtrassClass = "";
		if (this.state.clickLight == "red") redExtrassClass = "selected";
		let yellowExtrassClass = "";
		if (this.state.clickLight == "yellow") yellowExtrassClass = "selected";
		let greenExtrassClass = "";
		if (this.state.clickLight == "green") greenExtrassClass = "selected";

		return (
			<div>
				<div id="container">
					<div
						className={"red light " + redExtrassClass}
						onClick={() =>
							this.setState({ clickLight: "red" })
						}></div>
					<div
						className={"yellow light " + yellowExtrassClass}
						onClick={() =>
							this.setState({ clickLight: "yellow" })
						}></div>
					<div
						className={"green light " + greenExtrassClass}
						onClick={() =>
							this.setState({ clickLight: "green" })
						}></div>
				</div>
			</div>
		);
	}
}
