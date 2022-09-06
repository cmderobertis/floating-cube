import React, { useState, useReducer } from "react"
import SpinningMesh from "./components/SpinningMesh"
import Form from "./components/Form"
import { Html, softShadows, OrbitControls } from "@react-three/drei"
import { Canvas, extend } from "@react-three/fiber"
extend()

softShadows()

function App() {
  const [mesh, setMesh] = useState({
    aX: 3,
    aY: 3,
    aZ: 3,
    pX: 0,
    pY: 0,
    pZ: 0,
    color: "#1D90FF",
    speed: 3,
  })

  const initialState = []

  function reducer(state, action) {
    return [...state, action]
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Html fullscreen>
          <div className="row mt-3 justify-content-start">
            <div className="col-4 ms-3 text-center">
              <Form
                mesh={mesh}
                setMesh={setMesh}
                state={state}
                dispatch={dispatch}
              />
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
        <SpinningMesh
          args={[mesh.aX, mesh.aY, mesh.aZ]}
          position={[mesh.pX, mesh.pY, mesh.pZ]}
          color={mesh.color}
          speed={mesh.speed}
        />
        {state.map((mesh, idx) => {
          return (
            <SpinningMesh
              key={idx}
              args={mesh.args}
              position={mesh.position}
              color={mesh.color}
              speed={mesh.speed}
            />
          )
        })}
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
