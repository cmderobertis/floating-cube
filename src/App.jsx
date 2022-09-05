import React, { useState } from "react"
import SpinningMesh from "./components/SpinningMesh"
import Form from "./components/Form"
import { Html, softShadows, OrbitControls } from "@react-three/drei"
import { Canvas, extend } from "@react-three/fiber"
extend()

softShadows()

function App() {
  const [meshes, setMeshes] = useState([
    { args: [3, 3, 3], position: [0, 0, 0], color: "dodgerblue", speed: 3 },
  ])
  const [mesh, setMesh] = useState({
    args: [3, 3, 3],
    position: [0, 0, 0],
    color: "dodgerblue",
    speed: 3,
  })

  const addMesh = (data) => {
    setMeshes([...meshes, data])
  }

  return (
    <>
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Html fullscreen>
          <div className="row mt-3 justify-content-start">
            <div className="col-4 ms-3 text-center">
              <Form setMesh={setMesh} />
            </div>
            <div className="col">
              <h1 className="text-center text-dark">Edit This Cube</h1>
            </div>
          </div>
        </Html>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -10, 0]}
          >
            <planeGeometry args={[100, 100]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
        </group>
        {/* {meshes.map((mesh, idx) => {
          return (
            <SpinningMesh
              key={idx}
              args={mesh.args}
              position={mesh.position}
              color={mesh.color}
              speed={mesh.speed}
            />
          )
        })} */}
        <SpinningMesh
          args={mesh.args}
          position={mesh.position}
          color={mesh.color}
          speed={mesh.speed}
        />
        {/* <SpinningMesh
          args={[3, 2, 1]}
          position={[0, 1, 0]}
          color={color2}
          speed={2}
        />
        <SpinningMesh position={[-2, 1, -5]} color={color1} speed={6} />
        <SpinningMesh position={[5, 1, -2]} color={color3} speed={6} /> */}
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
