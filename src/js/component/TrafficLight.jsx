import React, { useState } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("red");
	return (
		<div className="box">
			<div
				onClick={() => setColor("red")}
				className={color === "red" ? "red glow" : "red"}></div>
			<div
				onClick={() => setColor("yellow")}
				className={color === "yellow" ? "yellow glow" : "yellow"}></div>
			<div
				onClick={() => setColor("green")}
				className={color === "green" ? "green glow" : "green"}></div>
		</div>
	);
};
