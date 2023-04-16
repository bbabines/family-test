import React, { useRef, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { ShoeModel } from "./ShoeModel";

const Experience = () => {
	const [shoeColor, setShoeColor] = useState("blue");

	return (
		<div className="exp-size">
			<Canvas>
				<ambientLight />
				<directionalLight />
				<OrbitControls makedefault />

				<ShoeModel scale={3} customColor={shoeColor} />

				{/* <mesh position={[2, 2, 0]}>
					<meshBasicMaterial color={"red"} />
					<planeGeometry />
				</mesh> */}
			</Canvas>
		</div>
	);
};

export default Experience;
