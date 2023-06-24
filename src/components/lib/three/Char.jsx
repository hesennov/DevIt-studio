/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 char.gltf --transfor
Author: assetfactory (https://sketchfab.com/assetfactory)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-computer-game-ready-53e7eeb0f69540d2892ad6aa5f47bd39
Title: Sci - fi computer game ready
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/char.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 28.869, 312.193]}
          rotation={[-1.469, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.Plane002_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
          <mesh
            geometry={nodes.Plane002_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        <group
          position={[0, 381.812, -82.657]}
          rotation={[-0.229, 0, 0]}
          scale={100}
        >
          <mesh
            geometry={nodes.Plane001_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
          <mesh
            geometry={nodes.Plane001_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        <group
          position={[0, 0, -94.762]}
          rotation={[0, Math.PI / 2, 0]}
          scale={123.801}
        >
          <mesh
            geometry={nodes.Circle_metal_2_0.geometry}
            material={materials.metal_2}
          />
          <mesh
            geometry={nodes.Circle_metal_1_0.geometry}
            material={materials.metal_1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/char.gltf");
