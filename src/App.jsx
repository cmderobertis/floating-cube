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
    speed: 1,
  })

  const initialState = []

  function reducer(state, action) {
    return [...state, action]
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const [rot, setRot] = useState(false)

  return (
    <>
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Html fullscreen>
          <div className="row mt-3 justify-content-start align-items-baseline">
            <div className="col-4 ms-3 text-center">
              <Form
                mesh={mesh}
                setMesh={setMesh}
                state={state}
                dispatch={dispatch}
                rot={rot}
                setRot={setRot}
              />
            </div>
            <div className="col">
              <h1 className="text-center text-dark">Create a Cube</h1>
            </div>
            <div className="col">
              <label className="me-2" htmlFor="rot">
                Rotation:
              </label>
              <input type="checkbox" name="rot" onChange={() => setRot(!rot)} />
            </div>
          </div>
        </Html>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 20, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={40}
          shadow-camera-left={-30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottom={-30}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[100, -15, 100]}
          >
            <planeGeometry args={[1000, 1000]} />
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
        {<OrbitControls enablePan={false} enableRotate={rot ? true : false} />}
      </Canvas>
    </>
  )
}

export default App
