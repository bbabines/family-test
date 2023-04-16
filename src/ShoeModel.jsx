/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/shoe.glb
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export function ShoeModel(props) {
	const { nodes, materials } = useGLTF("/shoe.glb");

	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.shoe.geometry}
				material={materials.laces}
				material-color={props.customColor}
			/>
			<mesh
				geometry={nodes.shoe_1.geometry}
				material={materials.mesh}
				material-color={props.customColor}
			/>
			<mesh
				geometry={nodes.shoe_2.geometry}
				material={materials.caps}
				material-color={props.customColor}
			/>
			<mesh
				geometry={nodes.shoe_3.geometry}
				material={materials.inner}
				material-color={props.customColor}
			/>
			<mesh
				geometry={nodes.shoe_4.geometry}
				material={materials.sole}
				material-color={props.customColor}
			/>
			<mesh
				geometry={nodes.shoe_5.geometry}
				material={materials.stripes}
				material-color={props.customColor}
			/>
			<mesh
				geometry={nodes.shoe_6.geometry}
				material={materials.band}
				material-color={props.customColor}
			/>
			<mesh
				geometry={nodes.shoe_7.geometry}
				material={materials.patch}
				material-color={props.customColor}
			/>
		</group>
	);
}

useGLTF.preload("/shoe.glb");
